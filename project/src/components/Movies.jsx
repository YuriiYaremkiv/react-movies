import { Movie } from "./Movie";

export const Movies = (props) => {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.map((movie) => {
        return <Movie key={movie.imdbID} {...movie} />;
      })}
    </div>
  );
};
