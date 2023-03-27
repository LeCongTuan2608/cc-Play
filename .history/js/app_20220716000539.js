import { slider_movie, slider_posters, showLoading, hideLoading } from './exports.js';
import { arrayList } from './index.js';
const list = async () => {
   arrayList;
   console.log(arrayList);
};
const load = async () => {
   showLoading();
   setTimeout(hideLoading, 1500);
};
load();
const movie_start = async () => {
   slider_movie('.category-highlights');
   slider_movie('.category-action');
   slider_movie('.category-animation');
};
movie_start();
const posters_start = async () => {
   slider_posters('.middle-page-mid-posters ul');
};
posters_start();
