let getMovieDetail = JSON.parse(localStorage.getItem('getMovieDetails'));
// console.log(getMovieDetail);
const renderIMGMovie = async (movieDetail) => {
   const imgMovie = document.querySelector('.img-TheMovie');
   if (!imgMovie) {
      console.error("img movie doesn't exit...");
      return;
   }
   let htmls = `
            <img src="${movieDetail.movie.thumb_url}"
            alt="">
            <div class="bgr-opacity concord-img"></div>`;
   imgMovie.insertAdjacentElement('beforebegin', htmls);
};
const renderTheMovie = async (movieDetail) => {
   const watchMovie = document.querySelector('.watch-movie');
   if (!watchMovie) {
      console.error("Watch movie doesn't exit...");
      return;
   }
   let htmls = `
            <div class="video-container">
                <iframe width="560" height="315"
                    src="${movieDetail.episodes[0].server_data[0].link_embed}"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
            <div class="movie-title">
                <h3>${movieDetail.movie.name}</h3>
            </div>`;
   watchMovie.insertAdjacentHTML('beforeend', htmls);
};
