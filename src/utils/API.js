const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = "d08efe59ac708d7aace6afed9ba7eae9";

const getPopularMovies = async (page = 1) => {
  const response = await fetch(
    `${BASE_URL}trending/all/day?api_key=${KEY}&page=${page}`
  );
  return await response.json();
};

const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return await response.json();
};

const searchMovieById = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  return await response.json();
};

export { getPopularMovies, searchMovies, searchMovieById };
