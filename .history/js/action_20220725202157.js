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
const btnScrollTop = document.querySelector('.scroll-top');
btnScrollTop.addEventListener('click', () => {
   document.querySelector('.basicLayouts').scrollIntoView({ behavior: 'smooth' });
});
//click menu category
const categories = document.querySelectorAll('.category ul li a');
const getCategories = async () => {
   for (let i = 0; i < categories.length; i++) {
      categories[i].onclick = async () => {
         localStorage.setItem('getCategory', JSON.stringify(categories[i].textContent));
      };
   }
};
getCategories();
// click menu year
const TheMoviesYear = document.querySelectorAll('.country ul li a');
const getTheMoviesYear = async () => {
   for (let i = 0; i < TheMoviesYear.length; i++) {
      TheMoviesYear[i].onclick = async () => {
         localStorage.setItem('getCategory', JSON.stringify(TheMoviesYear[i].textContent));
      };
   }
};
getTheMoviesYear();
