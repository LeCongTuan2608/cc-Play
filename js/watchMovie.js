import { showLoading, hideLoading, urlMovie } from './exports.js';
let getID = JSON.parse(localStorage.getItem('getID'));
console.log(getID);

//////////////////////////// event click episodes
const epsActive = async (data_movie, epss) => {
   const videoMv = document.querySelector('.video-container');
   for (let i = 0; i < epss.length; i++) {
      epss[i].onclick = async () => {
         for (let j = 0; j < epss.length; j++) {
            epss[j].classList.remove('eps-active');
         }
         epss[i].classList.add('eps-active');
         const getUrl = data_movie.episodes[0].server_data[i].link_embed;
         const iframe = document.querySelector('iframe');
         videoMv.removeChild(iframe);
         await renderVideo(getUrl);
      };
   }
};
///////////////////////////////////////////////////////////
//render image of the movie
const renderIMGMovie = async (movieDetail) => {
   const imgMovie = document.querySelector('.img-TheMovie');
   if (!imgMovie) {
      console.error("img movie doesn't exit...");
      return;
   }
   let htmls = `
            <img src="${movieDetail.movie.thumb_url}"
            alt="">
            <div class="bgr-opacity concord-img"></div>`;
   return imgMovie.insertAdjacentHTML('beforeend', htmls);
};
// render content of the movie
const renderContentMovie = async (movieDetail) => {
   const contentMovie = document.querySelector('.movie-content');
   if (!contentMovie) {
      console.error("content movie doesn't exit...");
      return;
   }
   let htmls = `
            <div class="movie-title">
                <h2>${movieDetail.movie.name}</h2>
            </div>
            <div class="content">
                <span>Nội dung</span>
                <p>${movieDetail.movie.content}</p>
            </div>`;
   return contentMovie.insertAdjacentHTML('beforeend', htmls);
};
// render publisher of the movie
const renderPublisher = async (movieDetail) => {
   const publisher = document.querySelector('.infor-publisher');
   if (!publisher) {
      console.error("publisher movie doesn't exit...");
      return;
   }
   const actor = movieDetail.movie.actor.map((items) => {
      return items;
   });
   const category = movieDetail.movie.category.map((items) => {
      return items.name;
   });
   let htmls = `
            <span class="property">Số tập</span>
            <span class="value">${movieDetail.movie.episode_total}</span>
            <span class="property">Diễn viên</span>
            <span class="value">${actor}</span>
            <span class="property">Quốc gia</span>
            <span class="value">${movieDetail.movie.country[0].name}</span>
            <span class="property">Thể loại</span>
            <span class="value">${category}</span>
            <span class="property">Phát hành</span>
            <span class="value">${movieDetail.movie.year}</span>`;
   return publisher.insertAdjacentHTML('beforeend', htmls);
};
// render video the movie
const renderVideo = async (urlVideo) => {
   const videoContainer = document.querySelector('.video-container');
   if (!videoContainer) {
      console.error("Watch movie doesn't exit...");
      return;
   }
   if (urlVideo === '') {
      let htmls = `
      <span>Link này hỏng rồi các bác ơi <ion-icon name="sad-outline"></ion-icon></span>`;
      return videoContainer.insertAdjacentHTML('afterbegin', htmls);
   } else {
      let htmls = `
      <iframe class="video" src="${urlVideo}"
         title="YouTube video player" frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen>
      </iframe>`;
      return videoContainer.insertAdjacentHTML('afterbegin', htmls);
   }
};
// render title of the movie
const titleMovie = document.querySelector('.movie-title');
const renderTitleMovie = async (movieDetail) => {
   if (!titleMovie) {
      console.error("title The Movie movie doesn't exit...");
      return;
   }
   let htmls = `<h3>${movieDetail.movie.name}</h3>`;
   return titleMovie.insertAdjacentHTML('afterbegin', htmls);
};
// render episodes of the movie
const renderEpisode = async (movieDetail) => {
   const episode = document.querySelector('.ep-container ul');
   if (!episode) {
      console.error("episode movie doesn't exit...");
      return;
   }
   const eps = movieDetail.episodes[0].server_data;
   let htmls = eps.map((items) => {
      return `
            <li eps = ${items.slug}>
               <span>Tập ${items.name}</span>
            </li>`;
   });
   episode.innerHTML = await htmls.join('');
   const epss = document.querySelector('.ep-container ul li');
   epss.classList.add('eps-active');
};
// fech api of a movie
async function getMovieInforFromApi() {
   try {
      const response = await fetch(`${urlMovie + getID}`);
      const data_movie = await response.json();

      const urlVideo = data_movie.episodes[0].server_data[0].link_embed;
      await renderIMGMovie(data_movie);
      await renderContentMovie(data_movie);
      await renderPublisher(data_movie);
      await renderVideo(urlVideo);
      await renderTitleMovie(data_movie);
      await renderEpisode(data_movie);
      const epss = document.querySelectorAll('.ep-container ul li');
      await epsActive(data_movie, epss);
   } catch (error) {
      console.error({ error });
   }
}

const main = async () => {
   await getMovieInforFromApi();
   await hideLoading();
};
main();
