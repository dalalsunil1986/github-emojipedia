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
              <a href="https://github.com/brookton/github-emojipedia">GitHub</a>
              <a href="https://twitter.com/intent/tweet?text=Github%20Emojipedia%20%E2%80%93%20An%20%23emoji%20guide%20for%20Github%20commit%20messages%20by%20%40DavidBrookton%20%F0%9F%98%8D%F0%9F%98%9C&amp;url=https://github.com/brookton/github-emojipedia">Tweet</a>
              <a href="https://davidbrookton.com">Author</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;