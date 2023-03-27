let getMovieDetail = JSON.parse(localStorage.getItem('getMovieDetails'));
// console.log(getMovieDetail);

const renderTheMovie = async (movieDetail) => {
   const watchMovie = document.querySelector('.watch-movie');
   if (!watchMovie) {
      console.error("Watch movie doesn't exit...");
      return;
   }
   let htmls = `
            <div class="video-container">
                <iframe width="560" height="315"
                    src="https://kd.hd-bophim.com/share/c93fd94c6c44b2674f4e5c16e5a223eb"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
            <div class="movie-title">
                <h3>Kẻ cắp mặt trăng 4: sự trỗi dậy của Gru</h3>
            </div>`;
   watchMovie.insertAdjacentHTML('beforeend', htmls);
};
