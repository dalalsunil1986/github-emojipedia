import React from "react";

const Search = (props) => {
  return (
    <div className="search">
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search Emojis"
          onChange={props.updateSearchTerm}
          value={props.searchTerm}
        />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
