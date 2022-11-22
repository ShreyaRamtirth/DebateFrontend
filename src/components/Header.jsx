import React from "react";
import img1 from "../images/logos/witness-97e89c0159dd49799b40cdc4204b016d24ad.svg?vsn=d";
import img2 from "../images/logos/debate-art-bdbdabf603b44edec89b19a40f6c481a24ad.png?vsn=d";
import { Link, useNavigate } from "react-router-dom";
import cookieCutter from 'cookie-cutter';

function Header() {
  const navigate = useNavigate();
  const handleLogout=()=>{
    cookieCutter.set("jwt","");
    navigate('/');
  }
  return (
    <div>
      <header className="main-header">
        <div className="inner-container">
          <div className="main-header__inner">
           
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
            { cookieCutter.get("jwt") == null || cookieCutter.get("jwt") == ""? 
            <div className="main-header__auth-buttons">
             
  
            <Link to="/login" className="button main-header__auth-button">Log in</Link>
            <Link to="/signup"  className="button main-header__auth-button">Sign up</Link>
            
            </div>: <div className="main-header__auth-buttons">
           <div className="profile_name"> {cookieCutter.get("name")}
           </div>
           <div  className="button main-header__auth-button" onClick={handleLogout}> Logout</div>
            </div> }
            
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
