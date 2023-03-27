export const urlPage = 'https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=';
export const urlMovie = 'https://ophim1.com/phim/';
export const categories = document.querySelectorAll('.category ul li a');
export async function getCategories() {
   for (let i = 0; i < categories.length; i++) {
      categories[i].onclick = async () => {
         localStorage.setItem('getCategory', JSON.stringify(categories[i].textContent));
      };
   }
}
window.addEventListener('scroll', function () {
   const header = document.querySelector('.our-story-header-wrapper');
   const scrolling = window.pageYOffset;
   if (scrolling > 200) {
      header.classList.add('out-fixed');
      btnScrollTop.style.display = 'block';
   } else if (scrolling < 200) {
      // header.classList.toggle('out-fixed');
      header.classList.remove('out-fixed');
      btnScrollTop.style.display = 'none';
   }
});
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

// lọc thể loại phim
