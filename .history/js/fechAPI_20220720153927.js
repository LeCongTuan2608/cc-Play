import { urlPage, urlMovie } from './exports.js';
import { showLoading, hideLoading } from './exports.js';

export const renderListMovie = async (data, listSelector) => {
   const listMovie = document.querySelector(listSelector);
   if (!listMovie) {
      console.error("List movie doesn't exit...");
      return;
   }
   // let htmls = data.map((items) => {
   //    return `
   //    <div class="container-swiper">
   //       <div class="movie-swiper-slider">
   //          <div class="posters-movie ">
   //             <a href="watchMovie.html"><img class src="${items.movie.poster_url}" alt="Ảnh bị lỗi rồi :("></a>
   //          </div>
   //          <a href="">${items.movie.name}</a>
   //       </div>
   //    </div>`;
   // });
   const dataLength = data.length;
   let htmls = () => {
      for (let i = 0; i < dataLength; i++) {
         for (let j = i + 1; j < dataLength; j++) {
            if (data[i].movie.name == data[j].movie.name) {
               data.splice(j, 1);
            } else {
               let htmlss = `
                     <div class="container-swiper">
                        <div class="movie-swiper-slider">
                           <div class="posters-movie ">
                              <a href="watchMovie.html"><img class src="${data[i].movie.poster_url}" alt="Ảnh bị lỗi rồi :("></a>
                           </div>
                           <a href="">${data[i].movie.name}</a>
                        </div>
                     </div>`;
               listMovie.insertAdjacentHTML('beforeend', htmlss);
            }
         }
      }
   };
   htmls();
   // listMovie.innerHTML = await htmls.join('');
   await hideLoading();
};
// lọc thể loại phim
export async function filterCategory(listMovie, nameCategory, listSelector, country) {
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
               // const arrlength = arrayList.length;
               // for (let i = 0; i < arrlength; i++) {
               //    for (let j = i + 1; j < arrlength; j++) {
               //       if (arrayList[i].movie.name === arrayList[j].movie.name) {
               //          arrlength.splice(j, 1);
               //       }
               //    }
               // }
               // console.log(arrayList);
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
//fechAPI lần 2
async function getMovieInforFromApi(movie) {
   try {
      const lengthMovie = movie.length;
      for (let i = 0; i < lengthMovie; i++) {
         const response = await fetch(`${urlMovie + movie[i].slug}`);
         const data_movie = await response.json();
         arrayList.push(data_movie); //thêm items vào array
      }

      // cấu trúc filterCategory(arrayList, 'Thể loại phim', 'nơi render', 'country')
      await filterCategory(arrayList, 'Tình Cảm', '.category-romance');
      await filterCategory(arrayList, 'Hành Động', '.category-action', 'Nhật Bản');
      await filterCategory(arrayList, 'Kinh Dị', '.category-horror');
      await filterCategory(arrayList, 'Hài Hước', '.category-comedy', 'Nhật Bản');
      await filterCategory(arrayList, 'Viễn Tưởng', '.category-ScienceFiction', 'Nhật Bản');
      await filterCategory(arrayList, 'Phim 18+', '.category-Movie18');
   } catch (error) {
      console.error({ error });
   }
}

//fechAPI lần 1
export async function getMoviePageFromApi(page) {
   // console.log('Function running');
   try {
      const response = await fetch(`${urlPage + page}`);
      const data = await response.json();
      // renderListMovie(data.items, listSelector); //example
      getMovieInforFromApi(data.items);
   } catch (error) {
      console.error({ error });
   }
}
