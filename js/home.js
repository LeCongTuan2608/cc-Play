import { urlPage, urlMovie } from './exports.js';
import { showLoading, hideLoading } from './exports.js';
import { renderListMovie } from './exports.js';
import { sliderPosters, sliderMovie } from './exports.js';
import { getMovie } from './exports.js';
//
// const loading = (document.querySelector('.loading').style.display = 'block');
const slidePosterStart = async () => {
   sliderPosters('.middle-page-mid-posters ul');
};
// slidePosterStart();
//render poster
const renderPosterSlider = async (data, listSelector) => {
   const listPoster = document.querySelector(listSelector);
   if (!listPoster) {
      console.error("List movie doesn't exit...");
      return;
   }
   const newarray = data.slice(0, 5);
   let htmls = newarray.map((items) => {
      return `
         <li>
            <a href="watchMovie.html"  id = ${items.movie.slug}>
               <img src="${items.movie.poster_url}" alt="">
               <h2>${items.movie.name}</h2>
               <div class="bgr-opacity concord-img"></div>
            </a>
         </li>`;
   });
   return (listPoster.innerHTML = await htmls.join(''));
};
// lọc thể loại phim
export async function filterCategory(listMovie, nameCategory, listSelector) {
   const arrayListMovies = [];
   // const lengthMovie = listMovie.length;
   listMovie.map((item) => {
      if (nameCategory == 'Hoạt Hình' && item.movie.type == 'hoathinh') {
         arrayListMovies.push(item);
      }
      item.movie.category.map((itemNameCate) => itemNameCate.name).includes(nameCategory) &&
         item.movie.type !== 'hoathinh' &&
         arrayListMovies.push(item);
   });

   const getArrMovies15 = arrayListMovies.slice(0, 20);
   await renderListMovie(getArrMovies15, listSelector);
}
//fechAPI lần 2
const arrayList = [];
async function getMovieInforFromApi(movie) {
   try {
      movie.map(async (item) => {
         const response = await fetch(`${urlMovie + item.slug}`);
         const data_movie = await response.json();
         arrayList.push(data_movie); //thêm items vào array
      });
      await renderPosterSlider(arrayList, '.middle-page-mid-posters ul');
      //filterCategory(array, 'Thể loại phim', 'nơi render')
      await filterCategory(arrayList, 'Hành Động', '.category-action');
      await filterCategory(arrayList, 'Viễn Tưởng', '.category-ScienceFiction');
      await filterCategory(arrayList, 'Hình Sự', '.category-rime');
      await filterCategory(arrayList, 'Tình Cảm', '.category-romance');
      await filterCategory(arrayList, 'Tâm Lý', '.category-drama');
      await filterCategory(arrayList, 'Bí ẩn', '.category-mystery');
      await filterCategory(arrayList, 'Kinh Dị', '.category-horror');
      await filterCategory(arrayList, 'Hài Hước', '.category-comedy');
      await filterCategory(arrayList, 'Hoạt Hình', '.category-anime');
      // await filterCategory(arrayList, 'Phim 18+', '.category-Movie18');
   } catch (error) {
      console.error({ error });
   }
}

//fechAPI lần 1
export async function getMoviePageFromApi(page) {
   try {
      const response = await fetch(`${urlPage + page}`);
      const data = await response.json();
      console.log(data);
      await getMovieInforFromApi(data.items);
   } catch (error) {
      console.error({ error });
   }
}
const runSlider = async () => {
   const gridLayout = document.querySelectorAll('.gridLayout');
   gridLayout.forEach((element) => {
      element.classList.remove('gridLayout');
   });
   await sliderPosters('.middle-page-mid-posters ul');
   await sliderMovie('.category-action');
   await sliderMovie('.category-ScienceFiction');
   await sliderMovie('.category-rime');
   await sliderMovie('.category-romance');
   await sliderMovie('.category-drama');
   await sliderMovie('.category-mystery');
   await sliderMovie('.category-horror');
   await sliderMovie('.category-comedy');
   await sliderMovie('.category-anime');
};
const loadPoster = async () => {
   const poster = document.querySelector('.middle-page-mid-posters');
   poster.style.display = 'block';
};
//main
const main = async () => {
   for (let index = 1; index <= 8; index++) {
      let randomNumber = Math.floor(Math.random() * 300) + 4;
      await getMoviePageFromApi(randomNumber);
   }
   const TheMovies = document.querySelectorAll('.movie-swiper-slider');
   await runSlider();
   await loadPoster();
   const Poster = document.querySelectorAll('.middle-page-mid-posters ul li a');
   await getMovie(Poster);
   await getMovie(TheMovies);
   await hideLoading();
   const body = document.querySelector('body');
   body.style.overflow = 'visible';
};
main();
