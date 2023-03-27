import { sliderMovie, sliderPosters, renderListMovie } from './exports.js';
import { showLoading, hideLoading } from './exports.js';
const load = async () => {
   showLoading();
   setTimeout(hideLoading, 1500);
};
// load();
const slideMovieStart = async () => {
   sliderMovie('.category-romance');
   // sliderMovie('.category-action');
   sliderMovie('.category-animation');
};
// m chay slider o dau mo file do ra
slideMovieStart();
const slidePosterStart = async () => {
   sliderPosters('.middle-page-mid-posters ul');
};
slidePosterStart();
