import { useState } from "react";
import css from "./Search.module.scss";

export const Search = ({ searchMoviesFunc }) => {
  const [search, setSearch] = useState("");

  const changeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    searchMoviesFunc(search);
    setSearch("");
  };

  return (
    <form className={css.search} onSubmit={handleSubmitSearch}>
      <input type="text" onChange={changeSearch} value={search} />
      <button type="submit">Search</button>
    </form>
  );
};
