import { useState, useEffect } from "react";
import { searchMovieById } from "../../utils/API";

export const MoviePage = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    searchMovieById("76600").then((result) => {
      setMovie(result);
    });
  }, []);

  return (
    <div>
      <ul>
        {Object.keys(movie).map((data) => {
          return <li>{data}</li>;
        })}
      </ul>
      This is movies Page
    </div>
  );
};
