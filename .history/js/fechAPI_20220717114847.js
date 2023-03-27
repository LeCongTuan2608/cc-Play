import { urlPage, urlMovie } from './exports.js';
import { filterCategory } from './exports.js';

// lọc thể loại phim

const arrayList = [];

//fechAPI lần 2
// xong o tren nay la goi ra thong tin cua phim
async function getMovieInforFromApi(movie) {
   try {
      let lengthMovie = movie.length; //const
      for (let i = 0; i < lengthMovie; i++) {
         const response = await fetch(`${urlMovie + movie[i].slug}`);
         const data_movie = await response.json();
         arrayList.push(data_movie); //thêm items vào array
      }
      // console.log(arrayList);
      await filterCategory(arrayList);
   } catch (error) {
      console.error({ error });
   }
}

//fechAPI lần 1
async function getMoviePageFromApi(page, listSelector) {
   // console.log('Function running');
   try {
      const response = await fetch(`${urlPage + page}`);
      const data = await response.json();
      // renderListMovie(data.items, listSelector); //example
      // console.log(data.items);
      console.log({ data });
      getMovieInforFromApi(data.items);
   } catch (error) {
      console.error({ error });
   }
}
// cai nay la goi api ra 1 page
//main run
const main = async () => {
   for (let index = 1; index <= 1; index++) {
      await getMoviePageFromApi(index);
   }
   // console.error(arrayList);
};
main();
