import { sliderMovie, sliderPosters } from './exports.js';
import { showLoading, hideLoading } from './exports.js';
import { filterCategory, renderListMovie } from './exports.js';
import { getMoviePageFromApi, getMovieInforFromApi } from './fechAPI.js';
import { getCategories } from './exports.js';
getCategories();
const btnScrollTop = document.querySelector('.scroll-top');
export const scrollll = btnScrollTop.addEventListener('click', () => {
   document.querySelector('.basicLayouts').scrollIntoView({ behavior: 'smooth' });
});

const slidePosterStart = async () => {
   sliderPosters('.middle-page-mid-posters ul');
};
slidePosterStart();

const slideMovieStart = async () => {
   sliderMovie('.category-romance');
   // sliderMovie('.category-action');
   sliderMovie('.category-animation');
};
// slideMovieStart();
// main run
const main = async () => {
   await showLoading();
   for (let index = 1; index <= 10; index++) {
      let randomNumber = Math.floor(Math.random() * 300) + 4;
      await getMoviePageFromApi(randomNumber);
      console.log(randomNumber);
   }
};
main();
