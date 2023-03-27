import { sliderMovie, sliderPosters, renderListMovie } from './exports.js';
import { showLoading, hideLoading } from './exports.js';
import { filterCategory } from './exports.js';
import { getMoviePageFromApi, getMovieInforFromApi, arrayList } from './fechAPI.js';
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
   await showLoading();
   for (let index = 1; index <= 2; index++) {
      let randomNumber = Math.floor(Math.random() * 400) + 1;
      await getMoviePageFromApi(randomNumber);
      console.log(randomNumber);
   }
   // await filterCategory(arrayList, 'Tình Cảm', '.category-romance');
   // await filterCategory(arrayList, 'Hành Động', '.category-action', 'Nhật Bản');
   // await filterCategory(arrayList, 'Kinh Dị', '.category-horror');
   // await filterCategory(arrayList, 'Hài Hước', '.category-comedy', 'Nhật Bản');
   // await filterCategory(arrayList, 'Viễn Tưởng', '.category-ScienceFiction', 'Nhật Bản');
   // await filterCategory(arrayList, 'Phim 18+', '.category-Movie18');
};
main();
