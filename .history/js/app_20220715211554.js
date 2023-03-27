import { load } from './index.js';
import { slider_movie, slider_posters } from './exports.js';
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
