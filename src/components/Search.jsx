import React from "react";

export class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
      this.setState({ search: "" });
    }
  };

  handleBtn = (event) => {
    this.props.searchMovies(this.state.search, this.state.type);
    this.setState({ search: "" });
  };

  handleFilter = (event) => {
    this.setState({ type: event.target.dataset.type });
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            className="validate"
            placeholder="Search"
            type="search"
            value={this.state.search}
            onChange={this.handleChange}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search-btn"
            onClick={this.handleBtn}
            type="button"
          >
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
                  onChange={this.handleFilter}
                  checked={this.state.type === "all"}
                />
                <span>All</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="movie"
                  onChange={this.handleFilter}
                  checked={this.state.type === "movie"}
                />
                <span>Movies only</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="series"
                  onChange={this.handleFilter}
                  checked={this.state.type === "series"}
                />
                <span>Series only</span>
              </label>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
