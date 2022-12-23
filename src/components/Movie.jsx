import React from "react";

export const Movie = (props) => {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div className="card" id={id}>
      <div className="card-image waves-effect waves-block waves-light">
        {poster === "N/A" ? (
          <img
            src={`https://via.placeholder.com/300x400?text=${title}`}
            className="activator"
            alt={title}
          />
        ) : (
          <img src={poster} className="activator" alt={title} />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>{year}</p>
        <span className="rigth">{type}</span>
      </div>
    </div>
  );
};
