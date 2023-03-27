import { sliderMovie, sliderPosters, showLoading, hideLoading } from './exports.js';
const load = async () => {
   showLoading();
   setTimeout(hideLoading, 1500);
};
load();
export const slideMovieStart = async () => {
   sliderMovie('.category-highlights');
   sliderMovie('.category-action');
   sliderMovie('.category-animation');
};
// slideMovieStart();
const slidePosterStart = async () => {
   sliderPosters('.middle-page-mid-posters ul');
};
slidePosterStart();
