import { url_page } from './exports.js';
//scroll > 200 => show header, show scroll-top
const btn_top = document.querySelector('.scroll-top'); // dat ten theo kieu snake case hay cammel case nen thong nhat
btn_top.addEventListener('click', () => {
   document.querySelector('.basicLayouts').scrollIntoView({ behavior: 'smooth' });
});

const header = document.querySelector('.our-story-header-wrapper'); // bien nao khong su dung o cac ham khac thi bo vao trong ham su dung no trang bi trung voi cac bien toan cuc khac
window.addEventListener('scroll', function () {
   let scrolling = window.pageYOffset;
   // console.log(scrolling);
   if (scrolling > 200) {
      header.classList.add('out-fixed');
      btn_top.style.display = 'block';
   } else if (scrolling < 200) {
      // header.classList.toggle('out-fixed');
      header.classList.remove('out-fixed');
      btn_top.style.display = 'none';
   }
});

const renderListMovie = (data, listSelector) => {
   const listMovie = document.querySelector(listSelector);
   if (!listMovie) {
      console.error("List movie doesn't exit...");
      return;
   }
   // get list xong render ra
};
// duyệt thể loại phim
async function filterCategory(listMovie, nameCategory) {
   // lấy nameCategory = thể loại
   for (let i = 0; i < listMovie.length; i++) {
      const cate = listMovie[i].movie.category; // console.log(cate);
      for (let j = 0; j < cate.length; j++) {
         if (cate[j].name == 'Kinh Dị') {
            console.log(listMovie[i].movie);
         }
      }
   }
}
var arrayList = []; //khởi tạo array

//fechAPI lần 2
async function getMovieInforFromApi(movie) {
   try {
      const response = await fetch(`https://ophim1.com/phim/${movie}`);
      const data_movie = await response.json();
      arrayList.push(data_movie); //thêm items vào array
      // console.log(arrayList);
      filterCategory(arrayList);
   } catch (error) {
      console.error({ error });
   }
}

//fechAPI lần 1
async function getMoviePageFromApi(page, listSelector) {
   // console.log('Function running');
   try {
      const response = await fetch(`https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${page}`);
      const data = await response.json();
      // renderListMovie(data.items, listSelector); //example
      const lengthData = data.items.length;
      for (let i = 0; i < lengthData; i++) {
         getMovieInforFromApi(data.items[i].slug);
         // console.log(data.items[i].slug);
      }
   } catch (error) {
      console.error({ error });
   }
}
//main run
const main = async () => {
   for (let index = 1; index <= 2; index++) {
      await getMoviePageFromApi(index); //ok? ok
   }
   // console.error(arrayList);
};
main();
