$(document).ready(function () {
   $('.middle-page-mid-posters ul').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
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
      //   autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
         {
            breakpoint: 721,
            settings: {
               slidesToShow: 4,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 3,
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
      prevArrow:
         "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:
         "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
   });
});
