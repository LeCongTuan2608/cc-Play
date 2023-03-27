// import { sliderMovie, sliderPosters } from './exports.js';
import { showLoading, hideLoading } from './exports.js';
import { filterCategory, renderListMovie } from './exports.js';
import { getMoviePageFromApi, getMovieInforFromApi } from './fechAPI.js';
let getCategory = JSON.parse(localStorage.getItem('getCategory'));
console.log(getCategory);
