import { urlPage, urlMovie } from './exports.js';
import { renderListMovie } from './exports.js';
const btnScrollTop = document.querySelector('.scroll-top');
btnScrollTop.addEventListener('click', () => {
   document.querySelector('.basicLayouts').scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('scroll', function () {
   const header = document.querySelector('.our-story-header-wrapper');
   let scrolling = window.pageYOffset; // const
   if (scrolling > 200) {
      header.classList.add('out-fixed');
      btnScrollTop.style.display = 'block';
   } else if (scrolling < 200) {
      // header.classList.toggle('out-fixed');
      header.classList.remove('out-fixed');
      btnScrollTop.style.display = 'none';
   }
});

// lọc thể loại phim
async function filterCategory(listMovie, nameCategory) {
   let arrayListMovie = []; //const
   const lengthMovie = listMovie.length;
   for (let i = 0; i < lengthMovie; i++) {
      const cate = listMovie[i].movie.category;
      for (let j = 0; j < cate.length; j++) {
         if (cate[j].name == 'Tình Cảm') {
            // khong fix cung tao mot bien trong export.js v: export const categoryType = 'Tinh Cam' roi import vo
            // console.log(listMovie[i]);
            arrayListMovie.push(listMovie[i]);
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
   // console.log(arrayListMovie);
   renderListMovie(arrayListMovie, '.category-action');
}
var arrayList = []; //khởi tạo array //const

//fechAPI lần 2
// xong o tren nay la goi ra thong tin cua phim
async function getMovieInforFromApi(movie) {
   try {
      let lengthMovie = movie.length; //const
      for (let i = 0; i < lengthMovie; i++) {
         const response = await fetch(`${urlMovie + movie[i].slug}`);
         const data_movie = await response.json();
         arrayList.push(data_movie); //thêm items vào array
      }
      // console.log(arrayList);
      await filterCategory(arrayList);
   } catch (error) {
      console.error({ error });
   }
}

//fechAPI lần 1
async function getMoviePageFromApi(page, listSelector) {
   // console.log('Function running');
   try {
      const response = await fetch(`${urlPage + page}`);
      const data = await response.json();
      // renderListMovie(data.items, listSelector); //example
      // console.log(data.items);
      console.log({ data });
      getMovieInforFromApi(data.items);
   } catch (error) {
      console.error({ error });
   }
}
// cai nay la goi api ra 1 page
//main run
const main = async () => {
   for (let index = 1; index <= 1; index++) {
      await getMoviePageFromApi(index); //ok? ok
   }
   // console.error(arrayList);
};
main();
