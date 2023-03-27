import { urlPage, urlMovie } from './exports.js';
import { filterCategory, renderListMovie } from './exports.js';

// lọc thể loại phim

const arrayList = [];

//fechAPI lần 2
async function getMovieInforFromApi(movie) {
   try {
      let lengthMovie = movie.length; //const
      for (let i = 0; i < lengthMovie; i++) {
         const response = await fetch(`${urlMovie + movie[i].slug}`);
         const data_movie = await response.json();
         arrayList.push(data_movie); //thêm items vào array
      }
      // console.log(arrayList);
      await filterCategory(arrayList, 'Tình Cảm', '.category-romance');
      await filterCategory(arrayList, 'Hành Động', '.category-action', 'Nhật Bản');
      // await filterCategory(arrayList, 'Tình Cảm', '.category-romance');
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
      // console.log({ data });
      getMovieInforFromApi(data.items);
   } catch (error) {
      console.error({ error });
   }
}
//main run
const main = async () => {
   for (let index = 1; index <= 1; index++) {
      await getMoviePageFromApi(index);
   }
   // console.error(arrayList);
};
main();
