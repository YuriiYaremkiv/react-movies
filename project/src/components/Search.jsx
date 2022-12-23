import React from "react";

export class Search extends React.Component {
  state = {
    search: "",
  };

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search);
      this.setState({ search: "" });
    }
  };

  handleBtn = (event) => {
    this.props.searchMovies(this.state.search);
    this.setState({ search: "" });
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
        </div>
      </div>
    );
  }
}
