import React from "react";

const Search = (props) => {
  return (
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search Emojis"
          onChange={props.updateSearchTerm}
          value={props.searchTerm}
        />
      </form>

  );
};

export default Search;
