export const urlPage = 'https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=';
export const urlMovie = 'https://ophim1.com/phim/';
export async function sliderPosters(namePoster) {
   $(document).ready(function () {
      $(namePoster).not('.slick-initialized').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,
         autoplay: true,
         autoplaySpeed: 2000,
         arrows: false,
         // responsive: [
         // ],
         prevArrow:
            "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
         nextArrow:
            "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      });
   });
}

export async function sliderMovie(nameList) {
   $(document).ready(function () {
      $(nameList).slick({
         slidesToShow: 7,
         slidesToScroll: 7,
         infinite: false,
         autoplaySpeed: 2000,
         responsive: [
            {
               breakpoint: 1400,
               settings: {
                  slidesToShow: 6,
                  slidesToScroll: 6,
               },
            },
            {
               breakpoint: 1200,
               settings: {
                  slidesToShow: 5,
                  slidesToScroll: 5,
               },
            },
            {
               breakpoint: 850,
               settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  arrows: false,
               },
            },
            {
               breakpoint: 640,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  arrows: false,
               },
            },
            {
               breakpoint: 450,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
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
      let thum_url = '';
      if (!items.movie.thumb_url) {
         thum_url = 'https://bom.so/54ttlR';
      } else {
         thum_url = items.movie.thumb_url;
      }
      return `
      <div class="container-swiper">
         <div class="movie-swiper-slider" id = ${items.movie.slug}>
            <a href="watchMovie.html">
               <div class="posters-movie ">
                  <img src="${thum_url}" alt="Ảnh bị lỗi rồi :(">
               </div>
               <div class="title-movie">
                  <p>${items.movie.name}</p>
               </div>
            </a>
         </div>
      </div>`;
   });
   return (listMovie.innerHTML = await htmls.join(''));
};
export const getMovie = async (TheMovies) => {
   for (let i = 0; i < TheMovies.length; i++) {
      const getID = TheMovies[i].getAttribute('id');
      TheMovies[i].onclick = async () => {
         localStorage.setItem('getID', JSON.stringify(getID));
      };
   }
};
