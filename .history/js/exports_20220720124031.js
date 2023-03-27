export const urlPage = 'https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=';
export const urlMovie = 'https://ophim1.com/phim/';
export const ListCategory = document.querySelectorAll('.category ul li');
export var cate = '';
export function getCategory() {
   for (let i = 0; i < ListCategory.length; i++) {
      ListCategory[i].onclick = () => {
         console.log(ListCategory[i].textContent);
         cate = ListCategory[i].textContent;
         console.log(cate);
      };
   }
}
getCategory();
// export function cateClick() {
//    for (let i = 0; i < ListCategory.length; i++) {
//       ListCategory[i].onclick = () => {
//          const text = ListCategory[i].values;
//          console.log(text);
//       };
//    }
// }
// cateClick();
export function sliderPosters(namePoster) {
   $(document).ready(function () {
      $(namePoster).slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,
         autoplay: true,
         autoplaySpeed: 2000,
         responsive: [
            {
               breakpoint: 420,
               settings: {
                  arrows: false,
               },
            },
         ],
         prevArrow:
            "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
         nextArrow:
            "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      });
   });
}
export function sliderMovie(nameList) {
   $(document).ready(function () {
      $(nameList).slick({
         slidesToShow: 5.5,
         slidesToScroll: 3,
         infinite: false,
         autoplaySpeed: 2000,
         responsive: [
            {
               breakpoint: 721,
               settings: {
                  slidesToShow: 4.5,
                  arrows: false,
               },
            },
            {
               breakpoint: 420,
               settings: {
                  slidesToShow: 3.5,
                  arrows: false,
               },
            },
         ],
         prevArrow:
            "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
         nextArrow:
            "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      });
   });
}
const btnScrollTop = document.querySelector('.scroll-top');
btnScrollTop.addEventListener('click', () => {
   document.querySelector('.basicLayouts').scrollIntoView({ behavior: 'smooth' });
});
const loading = document.querySelector('.loading');
export const hideLoading = async () => {
   loading.style.display = 'none';
};
export const showLoading = async () => {
   loading.style.display = 'block';
};
// render movie
export const renderListMovie = async (data, listSelector) => {
   const listMovie = document.querySelector(listSelector);
   if (!listMovie) {
      console.error("List movie doesn't exit...");
      return;
   }
   let htmls = data.map((items) => {
      return `
      <div class="container-swiper">
         <div class="movie-swiper-slider">
            <div class="posters-movie ">
               <a href="watchMovie.html"><img class src="${items.movie.poster_url}" alt="Ảnh bị lỗi rồi :("></a>
            </div>
            <a href="">${items.movie.name}</a>
         </div>
      </div>`;
   });
   listMovie.innerHTML = await htmls.join('');
   await hideLoading();
   // sliderMovie(listSelector);
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
