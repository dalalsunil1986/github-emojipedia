import React from "react";
//import Search from "./Search"

const Header = (props) => {
  return (
    <header className="header">
      <a href="/">
        <h1>github emojis</h1>
      </a>
      <h2>A github emoji shortcode guide</h2>
      <h3>powered by github's emoji api</h3>
			<div className="header-buttons">

        <a className="btn btn-pink" href="https://github.com/brookton/github-emojipedia/">GitHub</a>

        <a className="btn btn-pink" href="https://twitter.com/intent/tweet?text=Github%20Emojipedia%20%E2%80%93%20An%20%23emoji%20guide%20for%20Github%20commit%20messages%20by%20%40DavidBrookton%20%F0%9F%98%8D%F0%9F%98%9C&amp;url=https://github.com/brookton/github-emojipedia" target="_blank" rel="noopener noreferrer">Tweet</a>

      </div>
      {/* <Search searchTerm={props.searchTerm} updateSearchTerm={props.updateSearchTerm}/> */}
		</header >
  )
}

export default Header;