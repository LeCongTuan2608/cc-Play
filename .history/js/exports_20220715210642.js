export function slider(nameList) {
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
