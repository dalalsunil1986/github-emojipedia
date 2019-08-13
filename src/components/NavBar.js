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
              <li className="item"><a href="/about">About</a></li>
              <li className="item"><a href="/contributors">Contributors</a></li>
              <li className="item"><a href="https://github.com/brookton/github-emojipedia">GitHub</a></li>
            </ul>
          </div>
        </div>
    </nav>
)}

export default NavBar;