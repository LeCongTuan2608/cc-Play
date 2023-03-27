import { load } from './index.js';
import { slider_movie, slider_posters } from './exports.js';

load();
const slick_slider = async () => {
   slider('.category-highlights');
   slider('.category-action');
   slider('.category-animation');
};
slick_slider();
const posters_start = async () => {
   slick_slider('.middle-page-mid-posters ul');
};
posters_start();
