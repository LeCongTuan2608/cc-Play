import { sliderMovie, sliderPosters } from './exports.js';
import { showLoading, hideLoading } from './exports.js';
import { getMoviePageFromApi } from './fechAPI.js';
export async function getCategories() {
   for (let i = 0; i < categories.length; i++) {
      categories[i].onclick = async () => {
         localStorage.setItem('getCategory', JSON.stringify(categories[i].textContent));
      };
   }
}
getCategories();
const btnScrollTop = document.querySelector('.scroll-top');
export const scrollll = btnScrollTop.addEventListener('click', () => {
   document.querySelector('.basicLayouts').scrollIntoView({ behavior: 'smooth' });
});

const slidePosterStart = async () => {
   sliderPosters('.middle-page-mid-posters ul');
};
slidePosterStart();

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
