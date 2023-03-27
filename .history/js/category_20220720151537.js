import { urlPage, urlMovie } from './exports.js';
import { showLoading, hideLoading } from './exports.js';
import { filterCategory, renderListMovie } from './fechAPI.js';
let getCategory = JSON.parse(localStorage.getItem('getCategory'));
console.log(getCategory);

const renderTitle = async () => {
   const titleCategory = document.querySelector('.title');
   if (!titleCategory) {
      console.error("List movie doesn't exit...");
      return;
   }
   let htmls = `<h2>Phim ${getCategory}</h2>`;
   titleCategory.insertAdjacentHTML('beforeend', htmls);
};
renderTitle();

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
const test = [1, 2, 3, 4, 5, 3];
// let show = test.map((items) => {
//    console.log(items);
// });
for (let i = 0; i < test.length; i++) {
   for (let j = 1; j < test.length; j++) {
      if (test[i] === test[j]) {
         test.splice(1, j);
      }
   }
   console.log(test);
}
