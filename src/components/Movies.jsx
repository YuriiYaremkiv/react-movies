import { Movie } from "./Movie";

export const Movies = (props) => {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length
        ? movies.map((movie) => {
            return <Movie key={movie.imdbID} {...movie} />;
          })
        : null}
      {movies.length === 0 ? <h4>Nothing found....</h4> : null}
    </div>
  );
};
