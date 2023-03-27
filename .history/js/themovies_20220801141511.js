import { urlPage, urlMovie } from './exports.js';
import { showLoading, hideLoading } from './exports.js';
import { renderListMovie } from './exports.js';
import { getMovie } from './exports.js';
let getCategory = JSON.parse(localStorage.getItem('getCategory'));
let getCountry = JSON.parse(localStorage.getItem('getCountry'));
let getYear = JSON.parse(localStorage.getItem('getYear'));
console.log(getCategory);
console.log(getCountry);
console.log(getYear);
//render title thể loại
const renderTitle = async () => {
   const titleCategory = document.querySelector('.title');
   if (!titleCategory) {
      console.error("List movie doesn't exit...");
      return;
   }
   if (getCategory !== '') {
      let htmls = `<h2>Thể loại: ${getCategory}</h2>`;
      return titleCategory.insertAdjacentHTML('beforeend', htmls);
   } else if (getCountry !== '') {
      let htmls = `<h2>Quốc gia: ${getCountry}</h2>`;
      return titleCategory.insertAdjacentHTML('beforeend', htmls);
   } else {
      let htmls = `<h2>Quốc gia: ${getYear}</h2>`;
      return titleCategory.insertAdjacentHTML('beforeend', htmls);
   }
};
renderTitle();
//lọc thể loại
const filterTheMovies = async (listMovie, listSelector) => {
   const arrayListMovie = [];
   const lengthMovie = listMovie.length;
   if (getCategory !== '') {
      for (let i = 0; i < lengthMovie; i++) {
         const cate = listMovie[i].movie.category;
         const cateLength = cate.length;
         if (getCategory == 'Hoạt Hình' && listMovie[i].movie.type == 'hoathinh') {
            arrayListMovie.push(listMovie[i]);
         }
         for (let j = 0; j < cateLength; j++) {
            if (cate[j].name == getCategory && listMovie[i].movie.type !== 'hoathinh') {
               arrayListMovie.push(listMovie[i]);
            }
         }
      }
   } else if (getCountry !== '') {
      for (let i = 0; i < lengthMovie; i++) {
         const country = listMovie[i].movie.country;
         const countryLength = country.length;
         for (let j = 0; j < countryLength; j++) {
            if (country[j].name == getCountry) {
               arrayListMovie.push(listMovie[i]);
            }
         }
      }
   } else {
      for (let i = 0; i < lengthMovie; i++) {
         const year = listMovie[i].movie.year;
         const yearLength = year.length;
         for (let j = 0; j < yearLength; j++) {
            if (year[j].name == getYear) {
               arrayListMovie.push(listMovie[i]);
            }
         }
      }
   }
   await renderListMovie(arrayListMovie, listSelector);
};
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
      await filterTheMovies(arrayList, '.category-movie');
      console.log(arrayList);
   } catch (error) {
      console.error({ error });
   }
}
//call api lần 1
async function getMoviePageFromApi(page) {
   try {
      const response = await fetch(`${urlPage + page}`);
      const data = await response.json();
      await getMovieInforFromApi(data.items);
   } catch (error) {
      console.error({ error });
   }
}
const loadFooter = async () => {
   const footer = document.querySelector('.footer');
   footer.style.display = 'block';
};
const getTheMovies = async () => {
   await showLoading();
   for (let i = 0; i <= 10; i++) {
      await getMoviePageFromApi(i);
   }
   const TheMovies = document.querySelectorAll('.movie-swiper-slider');
   await getMovie(TheMovies);
   await loadFooter();
   await hideLoading();
};
getTheMovies();
