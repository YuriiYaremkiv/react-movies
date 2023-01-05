import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../../utils/API.js";

import { MoviesList } from "../../components/MoviesList/MoviesList.tsx";
import { Preloader } from "../../components/Preloader/Preloader";
import { PaginationPages } from "../../components/PaginationPages/PaginationPages";
import { Search } from "../../components/Search/Search";

import css from "./HomePage.module.scss";

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPopularMovies(page)
      .then((data) => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, [page]);

  const searchMoviesFunc = (str) => {
    searchMovies(str)
      .then((data) => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  };

  const paginationPage = (page) => {
    setPage(page);
  };

  return (
    <>
      <Search searchMoviesFunc={searchMoviesFunc} />
      {loading ? <Preloader /> : null}
      {!loading ? <MoviesList movies={movies} /> : null}
      {!loading && totalPages > 1 ? (
        <div className={css.container}>
          <PaginationPages
            page={page}
            pages={totalPages}
            paginationPage={paginationPage}
          />
        </div>
      ) : null}
    </>
  );
};
