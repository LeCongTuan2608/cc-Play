import { urlPage, urlMovie } from './exports.js';
import { filterCategory, renderListMovie } from './exports.js';

// lọc thể loại phim

export var arrayList = [];

//fechAPI lần 2
export async function getMovieInforFromApi(movie) {
   try {
      let lengthMovie = movie.length; //const
      for (let i = 0; i < lengthMovie; i++) {
         const response = await fetch(`${urlMovie + movie[i].slug}`);
         const data_movie = await response.json();
         arrayList.push(data_movie); //thêm items vào array
      }
      console.log(arrayList);
      // cấu trúc filterCategory(arrayList, 'Thể loại phim', 'nơi render', 'country', numberRender)
   } catch (error) {
      console.error({ error });
   }
}

//fechAPI lần 1
export async function getMoviePageFromApi(page) {
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
