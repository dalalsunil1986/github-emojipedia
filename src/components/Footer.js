import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="row middle-xs">
          <div className="col-sm-6 made-with-love">
            <h3>Made with <span role="img" aria-label="Heart">❤️</span> by<a href="https://davidbrookton.com"> David Brookton</a></h3>
          </div>
          <div className="col-sm-6 footer-nav">
            <nav>
              <a href="/about">About</a>
              <a href="/contributors">Contributors</a>
              <a href="https://github.com/brookton/github-emojipedia">GitHub</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;