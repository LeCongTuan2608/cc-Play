import { urlPage, urlMovie } from './exports.js';
import { filterCategory, renderListMovie } from './exports.js';

// lọc thể loại phim

const arrayList = [];
//fechAPI lần 2
export async function getMovieInforFromApi(movie) {
   try {
      const lengthMovie = movie.length;
      for (let i = 0; i < lengthMovie; i++) {
         const response = await fetch(`${urlMovie + movie[i].slug}`);
         const data_movie = await response.json();
         arrayList.push(data_movie); //thêm items vào array
      }
      // console.log(arrayList);

      // cấu trúc filterCategory(arrayList, 'Thể loại phim', 'nơi render', 'country', numberRender)
      await filterCategory(arrayList, 'Tình Cảm', '.category-romance');
      await filterCategory(arrayList, 'Hành Động', '.category-action', 'Nhật Bản');
      await filterCategory(arrayList, 'Kinh Dị', '.category-horror');
      await filterCategory(arrayList, 'Hài Hước', '.category-comedy', 'Nhật Bản');
      await filterCategory(arrayList, 'Viễn Tưởng', '.category-ScienceFiction', 'Nhật Bản');
      await filterCategory(arrayList, 'Phim 18+', '.category-Movie18');
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
      getMovieInforFromApi(data.items);
   } catch (error) {
      console.error({ error });
   }
}
