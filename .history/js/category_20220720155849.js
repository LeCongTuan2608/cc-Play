import { urlPage, urlMovie } from './exports.js';
import { showLoading } from './exports.js';
import { renderListMovie } from './fechAPI.js';
let getCategory = JSON.parse(localStorage.getItem('getCategory'));
console.log(getCategory);

const renderTitle = async () => {
   const titleCategory = document.querySelector('.title');
   if (!titleCategory) {
      console.error("List movie doesn't exit...");
      return;
   }
   let htmls = `<h2>Phim ${getCategory}</h2>`;
   titleCategory.insertAdjacentHTML('beforeend', htmls);
};
renderTitle();

async function filterCategory(listMovie, nameCategory, listSelector, country) {
   const arrayListMovie = [];
   const lengthMovie = listMovie.length;
   let count = 0;
   for (let i = 0; i < lengthMovie; i++) {
      const cate = listMovie[i].movie.category;
      const cateLength = cate.length;
      for (let j = 0; j < cateLength; j++) {
         const nameCountry = listMovie[i].movie.country;
         const countryLength = nameCountry.length;
         for (let t = 0; t < countryLength; t++) {
            if (cate[j].name == nameCategory && nameCountry[t].name != country) {
               count++;
               if (count < 15) {
                  arrayListMovie.push(listMovie[i]);
               }
               // const listEpisode = listMovie[i].episodes[0].server_data;
               // // console.log(listEpisode);
               // for (let t = 0; t < listEpisode.length; t++) {
               //    if (listEpisode[t].link_embed != '') {
               //       // console.log(listEpisode[t]);
               //    } else {
               //       // console.error('Không có link');
               //    }
               // }
            }
         }
      }
   }
   await renderListMovie(arrayListMovie, listSelector);
}
const arrayList = [];
async function getMovieInforFromApi(movie) {
   try {
      const lengthMovie = movie.length;
      for (let i = 0; i < lengthMovie; i++) {
         const response = await fetch(`${urlMovie + movie[i].slug}`);
         const data_movie = await response.json();
         arrayList.push(data_movie); //thêm items vào array
      }
      // cấu trúc filterCategory(arrayList, 'Thể loại phim', 'nơi render', 'country', numberRender)
      filterCategory(arrayList, getCategory, '.category-movie', 'Nhật Bản');
   } catch (error) {
      console.error({ error });
   }
}

async function getMoviePageFromApi(page) {
   try {
      const response = await fetch(`${urlPage + page}`);
      const data = await response.json();
      getMovieInforFromApi(data.items);
   } catch (error) {
      console.error({ error });
   }
}
const getMovieCategory = async () => {
   //    await showLoading();
   for (let i = 1; i <= 10; i++) {
      let randomNumber = Math.floor(Math.random() * 300) + 4;
      await getMoviePageFromApi(randomNumber);
   }
};
getMovieCategory();
