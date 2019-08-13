import React from "react";

const Search = (props) => {
  return (
      <form className="form-inline my-2 my-lg-0" onSubmit={props.updateSearchTerm}>
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search Emojis"
          value={props.searchTerm}
          onChange={props.updateSearchTerm}
        />
        <button className="btn btn-pink" type="submit"><span role="img" aria-label="Atom">🔍</span>Search</button>
      </form>

  );
};

export default Search;
