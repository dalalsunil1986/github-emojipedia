import React from "react";


const NavBar = () => {
return (
  <nav className="nav row middle-xs">
    <input className="c-hamburger__input" id="hamburger-menu" type="checkbox"/>
      <label className="c-hamburger c-hamburger--htx" htmlFor="hamburger-menu">
        <span></span>
      </label>
        <div className="modal">
          <div className="modal-content">
            <ul className="navigation">
              <li className="item"><a href="/">Home</a></li>
              <li className="item"><a href="https://github.com/brookton/github-emojipedia">GitHub</a></li>
              <li className="item"><a href="https://twitter.com/intent/tweet?text=Github%20Emojipedia%20%E2%80%93%20An%20%23emoji%20guide%20for%20Github%20commit%20messages%20by%20%40DavidBrookton%20%F0%9F%98%8D%F0%9F%98%9C&amp;url=https://github.com/brookton/github-emojipedia">Tweet</a></li>
              <li className="item"><a href="https://davidbrookton.com">Author</a></li>
            </ul>
          </div>
        </div>
    </nav>
)}

export default NavBar;