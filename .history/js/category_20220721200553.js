import { urlPage, urlMovie } from './exports.js';
import { showLoading, hideLoading } from './exports.js';
import { renderListMovie } from './exports.js';
let getCategory = JSON.parse(localStorage.getItem('getCategory'));
console.log(getCategory);
//render title thể loại
const renderTitle = async () => {
   const titleCategory = document.querySelector('.title');
   if (!titleCategory) {
      console.error("List movie doesn't exit...");
      return;
   }
   let htmls = `<h2>Thể loại: ${getCategory}</h2>`;
   titleCategory.insertAdjacentHTML('beforeend', htmls);
};
renderTitle();
//lọc thể loại
async function filterCategory(listMovie, listSelector) {
   const arrayListMovie = [];
   const lengthMovie = listMovie.length;
   for (let i = 0; i < lengthMovie; i++) {
      const cate = listMovie[i].movie.category;
      const cateLength = cate.length;
      if (getCategory == 'Hoạt Hình' && (listMovie[i].movie.type == 'hoathinh' || listMovie[i].movie.type !== '')) {
         arrayListMovie.push(listMovie[i]);
      }
      for (let j = 0; j < cateLength; j++) {
         if (cate[j].name == getCategory && listMovie[i].movie.type !== 'hoathinh') {
            arrayListMovie.push(listMovie[i]);
         }
      }
   }
   await renderListMovie(arrayListMovie, listSelector);
}
//call api lần 2
const arrayList = [];
async function getMovieInforFromApi(movie) {
   try {
      const lengthMovie = movie.length;
      for (let i = 0; i < lengthMovie; i++) {
         const response = await fetch(`${urlMovie + movie[i].slug}`);
         const data_movie = await response.json();
         arrayList.push(data_movie); //thêm items vào array
      }
      filterCategory(arrayList, '.category-movie');
   } catch (error) {
      console.error({ error });
   }
}
//call api lần 1
async function getMoviePageFromApi(page) {
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
   let i = 1;
   for (i; i <= 20; i++) {
      await getMoviePageFromApi(i);
   }
   console.log(i);
};
getMovieCategory();
