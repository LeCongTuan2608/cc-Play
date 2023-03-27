import { urlMovie } from './exports.js';
let getTheMovie = JSON.parse(localStorage.getItem('getTheMovie'));
// localStorage.setItem('getTheMovie', JSON.stringify('So'+i));
console.log(getTheMovie);
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
   imgMovie.insertAdjacentElement('beforebegin', htmls);
};
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
   contentMovie.insertAdjacentElement('beforebegin', htmls);
};
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
      return items;
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
   publisher.insertAdjacentElement('beforebegin', htmls);
};
const renderTheMovie = async (movieDetail) => {
   const watchMovie = document.querySelector('.watch-movie');
   if (!watchMovie) {
      console.error("Watch movie doesn't exit...");
      return;
   }
   let htmls = `
            <div class="video-container">
                <iframe width="560" height="315"
                    src="${movieDetail.episodes[0].server_data[0].link_embed}"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
            <div class="movie-title">
                <h3>${movieDetail.movie.name}</h3>
            </div>`;
   watchMovie.insertAdjacentHTML('beforeend', htmls);
};
const test = async () => {
   const response = await fetch(`${urlMovie}` + `cuoc-chien-sakura-loat-phim-hoat-hinh`);
   const data = await response.json();
   console.log(data);
};
test();
