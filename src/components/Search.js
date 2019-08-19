import React from "react";

const Search = (props) => {
  return (
      <form className="search-form" >
        <input
          className="search-input"
          type="text"
          placeholder="Search Emojis"
          value={props.searchTerm}
          onChange={props.updateSearchTerm}
        />
        <button className="search-button" onClick={props.updateSearchTerm}><span role="img" aria-label="Atom">🔍</span></button>
      </form>

  );
};

export default Search;
