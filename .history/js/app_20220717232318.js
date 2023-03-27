import { sliderMovie, sliderPosters, renderListMovie } from './exports.js';
import { showLoading, hideLoading } from './exports.js';
import { getMoviePageFromApi, getMovieInforFromApi } from './fechAPI.js';
const load = async () => {
   showLoading();
   setTimeout(hideLoading, 1500);
};
// showLoading();
// load();
const btnScrollTop = document.querySelector('.scroll-top');
btnScrollTop.addEventListener('click', () => {
   document.querySelector('.basicLayouts').scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('scroll', function () {
   const header = document.querySelector('.our-story-header-wrapper');
   const scrolling = window.pageYOffset;
   if (scrolling > 200) {
      header.classList.add('out-fixed');
      btnScrollTop.style.display = 'block';
   } else if (scrolling < 200) {
      // header.classList.toggle('out-fixed');
      header.classList.remove('out-fixed');
      btnScrollTop.style.display = 'none';
   }
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
   // await showLoading();
   for (let index = 1; index <= 15; index++) {
      let randomNumber = Math.floor(Math.random() * 10);
      if (randomNumber === -1) {
         console.log(randomNumber);
         return randomNumber;
      } else {
         // console.log(randomNumber);
      }
      // await getMoviePageFromApi(randomNumber);
   }
   // console.error(arrayList);
};
main();
