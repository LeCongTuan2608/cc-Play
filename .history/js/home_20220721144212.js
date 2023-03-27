import { urlPage, urlMovie } from './exports.js';
import { showLoading, hideLoading } from './exports.js';
import { renderListMovie } from './exports.js';
import { sliderPosters } from './exports.js';
const slidePosterStart = async () => {
   sliderPosters('.middle-page-mid-posters ul');
};
// slidePosterStart();
const renderPosterSlider = async (data, listSelector) => {
   const listPoster = document.querySelector(listSelector);
   if (!listPoster) {
      console.error("List movie doesn't exit...");
      return;
   }
   const newarray = data.slice(0, 5);
   let htmls = newarray.map((items) => {
      return `
         <li>
            <a href="">
               <img src="${items.movie.poster_url}" alt="">
               <h2>${items.movie.name}</h2>
               <div class="bgr-opacity concord-img"></div>
            </a>
         </li>`;
   });
   listPoster.innerHTML = await htmls.join('');
   sliderPosters(listSelector);
   $(window).on('resize', sliderPosters);
};

// lọc thể loại phim
export async function filterCategory(listMovie, nameCategory, listSelector, typeMovie, country) {
   const arrayListMovies = [];
   const lengthMovie = listMovie.length;
   const test = [];
   let count = 0;
   for (let i = 0; i < lengthMovie; i++) {
      const cate = listMovie[i].movie.category;
      const cateLength = cate.length;
      for (let j = 0; j < cateLength; j++) {
         const nameCountry = listMovie[i].movie.country;
         const countryLength = nameCountry.length;
         for (let t = 0; t < countryLength; t++) {
            if (
               cate[j].name == nameCategory &&
               nameCountry[t].name != country &&
               listMovie[i].movie.type !== typeMovie
            ) {
               arrayListMovies.push(listMovie[i]);
            }
         }
      }
   }
   for (let k = 0; k < arrayListMovies.length; k++) {
      for (let d = k + 1; d < arrayListMovies.length; d++) {
         if (arrayListMovies[k].movie._id === arrayListMovies[d].movie._id) {
            arrayListMovies.splice(d, 1);
         }
      }
   }
   const arrMovies15 = arrayListMovies.slice(0, 14);
   await renderListMovie(arrMovies15, listSelector);
}
//fechAPI lần 2
const arrayList = [];
async function getMovieInforFromApi(movie) {
   try {
      const lengthMovie = movie.length;
      for (let i = 0; i < lengthMovie; i++) {
         const response = await fetch(`${urlMovie + movie[i].slug}`);
         const data_movie = await response.json();
         arrayList.push(data_movie); //thêm items vào array
      }
      // await renderPosterSlider(arrayList, '.middle-page-mid-posters ul');
      //filterCategory(arrayList, 'Thể loại phim', 'nơi render', 'type movie', 'country')
      await filterCategory(arrayList, 'Hành Động', '.category-action', 'hoathinh', 'Nhật Bản');
      await filterCategory(arrayList, 'Viễn Tưởng', '.category-ScienceFiction', 'hoathinh', 'Nhật Bản');
      await filterCategory(arrayList, 'Hình Sự', '.category-rime', 'hoathinh', '');
      await filterCategory(arrayList, 'Tình Cảm', '.category-romance', 'hoathinh', '');
      await filterCategory(arrayList, 'Tâm Lý', '.category-drama', 'hoathinh', '');
      await filterCategory(arrayList, 'Bí ẩn', '.category-mystery', 'hoathinh', '');
      await filterCategory(arrayList, 'Kinh Dị', '.category-horror', 'hoathinh', '');
      await filterCategory(arrayList, 'Hài Hước', '.category-comedy', 'Nhật Bản', '');
      await filterCategory(arrayList, 'Phim 18+', '.category-Movie18', '', '');
   } catch (error) {
      console.error({ error });
   }
}

//fechAPI lần 1
export async function getMoviePageFromApi(page) {
   try {
      const response = await fetch(`${urlPage + page}`);
      const data = await response.json();
      // renderListMovie(data.items, listSelector); //example
      getMovieInforFromApi(data.items);
   } catch (error) {
      console.error({ error });
   }
}
//main
const main = async () => {
   await showLoading();
   for (let index = 1; index <= 10; index++) {
      let randomNumber = Math.floor(Math.random() * 300) + 4;
      await getMoviePageFromApi(randomNumber);
      console.log(randomNumber);
   }
};
main();
