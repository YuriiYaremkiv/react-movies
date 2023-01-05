import { Movie } from "../Movie/Movie";
import css from "./MoviesList.module.scss";

export const MoviesList = (props) => {
  const { movies = [] } = props;
  return (
    <div className={css.movies}>
      {movies.length
        ? movies.map((movie) => {
            return <Movie key={movie.id} {...movie} />;
          })
        : null}
      {movies.length === 0 ? <h4>Nothing found....</h4> : null}
    </div>
  );
};
