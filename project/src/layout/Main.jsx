import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

export class Main extends React.Component {
  state = {
    movies: [],
    search: "",
  };

  searchMovies = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=34e3dba2&s=${str}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=34e3dba2&s=matrix")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  render() {
    const { movies } = this.state;

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {movies.length ? <Movies movies={movies} /> : <Preloader />}
      </main>
    );
  }
}
