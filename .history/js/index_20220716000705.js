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

// https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1
// khai bao bien global dem len dau ham, bien nao khong thay doi dung const
function fechAPI() {
   for (let index = 1; index < 9; index++) {
      let count = url_page + index;
      console.log(count + 'so thu:' + index);
      fetch(count) //fech 1 page cua phim
         .then((response) => response.json())
         .then((response) => {
            console.log(response); //danh sách phim của 1 page
            let slugg = response.items[0].slug; //thông tin vs danh sách tập phim
            //    fetch('https://ophim1.com/phim/' + slugg) //fech thông tin của phim
            //       .then((data) => data.json())
            //       .then((data) => {
            //          // console.log(data); //log ra thông tin của phim
            //          // console.log(data.episodes[0].server_data[0].link_embed); // link ambed dẫn tới phim
            //       });
         })
         .catch((error) => console.log('error', error));
   }
}

const renderListMovie = (data, listSelector) => {
   const listMovie = document.querySelector(listSelector);
   if (!listMovie) {
      console.error("List movie doesn't exit...");
      return;
   }
   // get list xong render ra
};

async function getMoviePageFromApi(page, listSelector) {
   console.log('Function running');
   try {
      const response = await fetch(`https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${page}`);
      const data = await response.json();
      // renderListMovie(data.items, listSelector); //example
      const lengthData = data.items.length;
      for (let i = 0; i < lengthData; i++) {
         getMovieInforFromApi(data.items[i].slug);
         // console.log(data.items[i].slug);
      }
      // console.log(data);
   } catch (error) {
      console.error({ error });
   }
}
var arrayList = [];
async function getMovieInforFromApi(movie) {
   try {
      const response = await fetch(`https://ophim1.com/phim/${movie}`);
      const data_movie = await response.json();
      // console.log(data_movie);
      // console.error(data_movie.movie.category);
      arrayList.push(data_movie);
      console.log(arrayList);

      // for (let i = 0; i < arrayList.length; i++) {
      //    // console.log(arrayList[i].movie.category);
      //    const cate = arrayList[i].movie.category;
      //    for (let j = 0; j < cate.length; j++) {
      //       cate.filter((value) => {
      //          if (value.name == 'Tình Cảm') {
      //             console.log(cate[j]);
      //          } else {
      //             console.error({ error });
      //          }
      //       });
      //    }
      // }
   } catch (error) {
      console.error({ error });
   }
}
// bo vao mot function main
// tach cac chuc nang ra tung file js khac nhau cho viec maintain sau nay, moi thu bo vo chung mot file sau nay can su thi an cuc
// ok xong roi do

const main = async () => {
   for (let index = 1; index <= 9; index++) {
      await getMoviePageFromApi(index); //ok? ok
   }
   // console.error(arrayList);
};
main();
