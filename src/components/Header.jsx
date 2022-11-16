import React from "react";
import img1 from "../images/logos/witness-97e89c0159dd49799b40cdc4204b016d24ad.svg?vsn=d";
import img2 from "../images/logos/debate-art-bdbdabf603b44edec89b19a40f6c481a24ad.png?vsn=d";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header className="main-header">
        <div className="inner-container">
          <div className="main-header__inner">
            <a
              href="#"
              className="main-header__logo-link"
              title="Go to the main page"
            >
              <img
                alt="Witness stand"
                className="main-header__logo-icon-image"
                src={img1}
              />
              <img
                alt="DebateArt"
                className="main-header__logo-text-image"
                src={img2}
              />
            </a>
           
            <nav className="main-header__nav-links-list-wrap">
              <ul className="main-header__nav-links-list">
                <li>
                <Link to="/debates" className="main-header__nav-link">Debates</Link>
                </li>
                <li>
                <Link to="/forum" className="main-header__nav-link">Forum</Link>
                </li>
                <li>
                <Link to="/leaderboards" className="main-header__nav-link">Leaderboards</Link>
                </li>
              </ul>
            </nav>
            <div className="main-header__search main-header__search--shrinkable">
                <input name="type" type="hidden" value="debates" />
                <input
                  aria-label="Search"
                  autoComplete="off"
                  className="main-header__search-input"
                  name="search_term"
                  placeholder="Search"
                  spellCheck="false"
                  type="text"
                />
            </div>
            <div className="main-header__auth-buttons">
             
            <Link to="/login" className="button main-header__auth-button">Log in</Link>
            <Link to="/signup"  className="button main-header__auth-button">Sign up</Link>
            
            </div>
            
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
