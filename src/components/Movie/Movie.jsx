import { useLocation, NavLink } from "react-router-dom";
import css from "./Movie.module.scss";

export const Movie = (props) => {
  const {
    id,
    title = "",
    name = "",
    backdrop_path,
    release_date,
    media_type,
    vote_average,
    handleSubmitId,
  } = props;

  const location = useLocation();

  return (
    <NavLink
      to={`/${id}`}
      state={{ from: location }}
      onClick={() => handleSubmitId(id)}
    >
      <div className={css.card} id={id}>
        <div className="card-image waves-effect waves-block waves-light">
          {backdrop_path === "N/A" ? (
            <img
              src={`https://via.placeholder.com/300x400?text=${title}`}
              className="activator"
              alt={title}
            />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
              className="activator"
              alt={title}
            />
          )}
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {title || name}
          </span>
          <p>Data: {release_date}</p>
          <p>Raiting: {vote_average}</p>
          <span className="rigth">{media_type}</span>
        </div>
      </div>
    </NavLink>
  );
};
