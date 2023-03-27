import { urlPage, urlMovie } from './exports.js';
import { showLoading, hideLoading } from './exports.js';
import { filterCategory, renderListMovie } from './fechAPI.js';
let getCategory = JSON.parse(localStorage.getItem('getCategory'));
console.log(getCategory);

export const dfsdsdf = async (data, listSelector) => {
   const listMovie = document.querySelector(listSelector);
   if (!listMovie) {
      console.error("List movie doesn't exit...");
      return;
   }
   let htmls = data.map((items) => {
      return `
      <div class="container-swiper">
         <div class="movie-swiper-slider">
            <div class="posters-movie ">
               <h2>${items}</h2>
            </div>
         </div>
      </div>`;
   });
   listMovie.innerHTML = await htmls.join('');
   await hideLoading();
};
const arrayList = [];
export async function getMovieInforFromApi(movie) {
   try {
      const lengthMovie = movie.length;
      for (let i = 0; i < lengthMovie; i++) {
         const response = await fetch(`${urlMovie + movie[i].slug}`);
         const data_movie = await response.json();
         arrayList.push(data_movie); //thêm items vào array
      }
      // cấu trúc filterCategory(arrayList, 'Thể loại phim', 'nơi render', 'country', numberRender)
      filterCategory(arrayList, getCategory, '.category-movie', 'Nhật Bản');
      dfsdsdf(getCategory, '.title');
   } catch (error) {
      console.error({ error });
   }
}

export async function getMoviePageFromApi(page) {
   try {
      const response = await fetch(`${urlPage + page}`);
      const data = await response.json();
      getMovieInforFromApi(data.items);
   } catch (error) {
      console.error({ error });
   }
}
const getMovieCategory = async () => {
   //    await showLoading();
   for (let i = 1; i <= 10; i++) {
      let randomNumber = Math.floor(Math.random() * 300) + 4;
      await getMoviePageFromApi(randomNumber);
   }
};
getMovieCategory();
