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
      let htmls = `<h2>Năm: ${getYear}</h2>`;
      return titleCategory.insertAdjacentHTML('beforeend', htmls);
   }
};
renderTitle();
//lọc thể loại
const filterTheMovies = async (listMovie, listSelector) => {
   const arrayListMovie = [];
   // const lengthMovie = listMovie.length;
   if (getCategory !== '') {
      listMovie.map((item) => {
         if (getCategory == 'Hoạt Hình' && item.movie.type == 'hoathinh') arrayListMovie.push(item);
         item.movie.category.map((itemNameCate) => itemNameCate.name).includes(getCategory) &&
            item.movie.type !== 'hoathinh' &&
            arrayListMovie.push(item);
      });
   } else if (getCountry !== '') {
      listMovie.map((item) => {
         item.movie.country.map((countryItem) => countryItem.name).includes(getCountry) &&
            arrayListMovie.push(item);
      });
   } else {
      listMovie.map((item) => {
         if (item.movie.year == getYear) arrayListMovie.push(item);
      });
   }
   await renderListMovie(arrayListMovie, listSelector);
};
//call api lần 2
const arrayList = [];
async function getMovieInforFromApi(movie) {
   try {
      movie.map(async (item) => {
         const response = await fetch(`${urlMovie + item.slug}`);
         const data_movie = await response.json();
         arrayList.push(data_movie); //thêm items vào array
      });

      await filterTheMovies(arrayList, '.category-movie');
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
   for (let i = 0; i <= 10; i++) {
      await getMoviePageFromApi(i);
   }
   const TheMovies = document.querySelectorAll('.movie-swiper-slider');
   await getMovie(TheMovies);
   await loadFooter();
   await hideLoading();
};
getTheMovies();
