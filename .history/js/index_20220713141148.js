$(document).ready(function () {
   $('.middle-page-mid-posters ul').slick({
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
$(document).ready(function () {
   $('.category-highlights').slick({
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
$(document).ready(function () {
   $('.category-action').slick({
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
$(document).ready(function () {
   $('.category-animation').slick({
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
//scroll > 200 => show header
const header = document.querySelector('.our-story-header-wrapper');
window.addEventListener('scroll', function () {
   let scrolling = window.pageYOffset;
   // console.log(scrolling);
   if (scrolling > 200) {
      header.classList.add('out-fixed');
   } else if (scrolling < 200) {
      // header.classList.toggle('out-fixed');
      header.classList.remove('out-fixed');
   }
});
const loading = document.querySelector('.loader');

const hideLoading = () => {
   loading.style.display = 'none';
};
function showLoading() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         loading.style.display = 'block';
         resolve();
      }, 0);
   });
}
// showLoading();
let load = async () => {
   // xử lý bất đồng bộ
   await showLoading();
   // hideLoading();
};
load();
