import { slider_movie, slider_posters, showLoading, hideLoading } from './exports.js';
const load = async () => {
   showLoading();
   setTimeout(hideLoading, 1500);
};
load();
const slide_movie_start = async () => {
   slider_movie('.category-highlights');
   slider_movie('.category-action');
   slider_movie('.category-animation');
};
slide_movie_start();
const slide_posters_start = async () => {
   slider_posters('.middle-page-mid-posters ul');
};
slide_posters_start();
