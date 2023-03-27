import { urlPage, urlMovie, renderListMovie } from './exports.js';

const btnScrollTop = document.querySelector('.scroll-top');
btnScrollTop.addEventListener('click', () => {
   document.querySelector('.basicLayouts').scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('scroll', function () {
   const header = document.querySelector('.our-story-header-wrapper');
   let scrolling = window.pageYOffset;
   // console.log(scrolling);
   if (scrolling > 200) {
      header.classList.add('out-fixed');
      btnScrollTop.style.display = 'block';
   } else if (scrolling < 200) {
      // header.classList.toggle('out-fixed');
      header.classList.remove('out-fixed');
      btnScrollTop.style.display = 'none';
   }
});

//chọn thể loại
const ChooseCategory = document.querySelectorAll('.menu-category ul li a');
const vlue = ChooseCategory.forEach((items) => {
   ChooseCategory.onclick = () => {
      alert('ban vua click');
   };
   // console.log(items.textContent); // lấy text của html
});
// lọc thể loại phim
async function filterCategory(listMovie, nameCategory) {
   // lấy nameCategory = thể loại
   const lengthMovie = listMovie.length;
   for (let i = 0; i < lengthMovie; i++) {
      const cate = listMovie[i].movie.category;
      console.log(cate);
      for (let j = 0; j < cate.length; j++) {
         if (cate[j].name == 'Hài Hước') {
            // console.log(listMovie[i]);
            const listEpisode = listMovie[i].episodes[0].server_data;
            // console.log(listEpisode);
            // renderListMovie(listMovie);
            for (let t = 0; t < listEpisode.length; t++) {
               if (listEpisode[t].link_embed != '') {
                  // console.log(listEpisode[t]);
               } else {
                  // console.error('Không có link');
               }
            }
         } else {
            return;
         }
      }
   }
}
var arrayList = []; //khởi tạo array

//fechAPI lần 2
async function getMovieInforFromApi(movie) {
   try {
      const response = await fetch(`${urlMovie + movie}`);
      const data_movie = await response.json();
      arrayList.push(data_movie); //thêm items vào array
      // console.log(arrayList);
      console.log(arrayList);
      // filterCategory(arrayList);
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
      const lengthData = data.items.length;
      // for (let i = 0; i < lengthData; i++) {
      getMovieInforFromApi(data.items.slug);
      // console.log(data.items[i].slug);
      // }
   } catch (error) {
      console.error({ error });
   }
}
//main run
const main = async () => {
   for (let index = 1; index <= 1; index++) {
      await getMoviePageFromApi(index); //ok? ok
   }
   // console.error(arrayList);
};
main();
