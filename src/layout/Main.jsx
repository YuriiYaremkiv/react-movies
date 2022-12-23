import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

export class Main extends React.Component {
  state = {
    movies: [],
    search: "",
    loading: true,
  };

  searchMovies = (str, type = "all") => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=34e3dba2&s=${str}${
        type === "all" ? "" : `&type=${type}`
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  };

  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=34e3dba2&s=2022")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : null}
        {loading ? null : <Movies movies={movies} />}
      </main>
    );
  }
}
