import { urlPage, urlMovie } from './exports.js';
import { showLoading, hideLoading } from './exports.js';
import { filterCategory, renderListMovie } from './exports.js';
let getCategory = JSON.parse(localStorage.getItem('getCategory'));
console.log(getCategory);

export const renderTitleCategory = async () => {
   const TitleCategory = document.querySelector('.title');
   let htmls = `<h2>Phim ${getCategory}</h2> `;
   TitleCategory.innerHTML = await htmls.join('');
   // sliderMovie(listSelector);
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
      await renderTitleCategory();
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
   await showLoading();
   for (let i = 1; i <= 10; i++) {
      let randomNumber = Math.floor(Math.random() * 300) + 4;
      await getMoviePageFromApi(randomNumber);
   }
};
getMovieCategory();
