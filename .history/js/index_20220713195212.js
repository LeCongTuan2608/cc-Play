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
//scroll > 200 => show header, show scroll-top
const btn_top = document.querySelector('.scroll-top');
btn_top.addEventListener('click', () => {
   document.querySelector('.basicLayouts').scrollIntoView({ behavior: 'smooth' });
});

const header = document.querySelector('.our-story-header-wrapper');
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
// hiệu ứng loading trang
const loading = document.querySelector('.loader');
const hideLoading = () => {
   loading.style.display = 'none';
};
function showLoading() {
   loading.style.display = 'block';
}
let load = () => {
   // window.pageYOffset = 0;
   // document.querySelector('body').scrollTop = 0;
   showLoading();
   setTimeout(hideLoading, 1500);
};
// load();
async function test() {
   setTimeout(() => {
      console.log('hello');
   }, 2000);
}
async function show() {
   let awai = await test();
   awai();
   console.log('2000');
}
show();
