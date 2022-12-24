import { useState } from "react";

export const Search = ({ searchMovies = Function.prototype }) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchMovies(search, type);
      setSearch("");
    }
  };

  const handleBtn = (event) => {
    searchMovies(search, type);
    setSearch("");
  };

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="input-field">
        <input
          className="validate"
          placeholder="Search"
          type="search"
          value={search}
          onChange={handleChange}
          onKeyDown={handleKey}
        />
        <button className="btn search-btn" onClick={handleBtn} type="button">
          Search
        </button>
        <div>
          <p>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="all"
                onChange={handleFilter}
                checked={type === "all"}
              />
              <span>All</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="movie"
                onChange={handleFilter}
                checked={type === "movie"}
              />
              <span>Movies only</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="series"
                onChange={handleFilter}
                checked={type === "series"}
              />
              <span>Series only</span>
            </label>
          </p>
        </div>
      </div>
    </div>
  );
};
