export const urlPage = 'https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=';
export const urlMovie = 'https://ophim1.com/phim/';
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
         slidesToScroll: 1,
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

const loading = document.querySelector('.loading');
export const hideLoading = () => {
   loading.style.display = 'none';
};
export const showLoading = () => {
   loading.style.display = 'block';
};
export const renderListMovie = (data, listSelector) => {
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
               <a href=""><img class src="${items.movie.poster_url}" alt=""></a>
            </div>
            <a href="">${items.movie.name}</a>
         </div>
      </div>`;
   });

   listMovie.innerHTML = htmls.join('');
   sliderMovie(listSelector);
   // listMovie.insertAdjacentHTML('beforeend', htmls);
};
export async function filterCategory(listMovie, nameCategory) {
   const arrayListMovie = [];
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
   console.log(arrayListMovie);
   renderListMovie(arrayListMovie, '.category-action');
}
