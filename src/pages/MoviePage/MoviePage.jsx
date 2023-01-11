import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchMovieById } from "../../utils/API";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export const MoviePage = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  console.log(location.state);

  useEffect(() => {
    searchMovieById(movieId).then((result) => {
      setMovie(result);
    });
  }, []);

  console.log("fghfgdfgdf");

  return (
    <div>
      <Link to={backLinkHref}>Back to</Link>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt="dfgdfgfdg"
      />
      <ul>
        {Object.keys(movie).map((data) => {
          return <li>{data}</li>;
        })}
      </ul>
      This is movies Page
    </div>
  );
};
