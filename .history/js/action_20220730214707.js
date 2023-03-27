window.addEventListener('scroll', function () {
   const header = document.querySelector('.our-story-header-wrapper');
   const scrolling = window.pageYOffset;
   if (scrolling > 200) {
      header.classList.add('out-fixed');
      btnScrollTop.style.display = 'block';
   } else if (scrolling < 200) {
      header.classList.remove('out-fixed');
      btnScrollTop.style.display = 'none';
   }
});
const btnScrollTop = document.querySelector('.scroll-top');
btnScrollTop.addEventListener('click', () => {
   document.querySelector('.basicLayouts').scrollIntoView({ behavior: 'smooth' });
});
//click menu category
const getCategories = async () => {
   const categories = document.querySelectorAll('.category ul li a');
   for (let i = 0; i < categories.length; i++) {
      categories[i].onclick = async () => {
         localStorage.setItem('getCategory', JSON.stringify(categories[i].textContent));
         localStorage.setItem('getTheMoviesYear', JSON.stringify(''));
      };
   }
};
getCategories();
// click menu country
const getCountryOfMovies = async () => {
   const Countries = document.querySelectorAll('.country ul li a');

   for (let i = 0; i < Countries.length; i++) {
      Countries[i].onclick = async () => {
         localStorage.setItem('getCountry', JSON.stringify(Countries[i].textContent));
         localStorage.setItem('getCategory', JSON.stringify(''));
      };
   }
};

const getCategoriesSecond = async () => {
   const categoriesSpan = document.querySelectorAll('.title a h2 span');
   const categoriesSecond = document.querySelectorAll('.title a');
   for (let i = 0; i < categoriesSecond.length; i++) {
      categoriesSecond[i].onclick = async () => {
         localStorage.setItem('getCategory', JSON.stringify(categoriesSpan[i].textContent));
         localStorage.setItem('getCountry', JSON.stringify(''));
      };
   }
};
getCategoriesSecond();
const menuList = document.querySelector('.menu-list');
const fixedActive = document.querySelector('.fixed-menu');
const menuActive = document.querySelector('.menu');

menuList.addEventListener('click', () => {
   fixedActive.style.display = 'block';
   // menuActive.style.display = 'block';
});
const closeMenu = document.querySelector('.menu ion-icon');
closeMenu.addEventListener('click', () => {
   fixedActive.style.display = 'none';
   // menuActive.style.display = 'none';
});
