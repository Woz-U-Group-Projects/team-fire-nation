import React from 'react';
import '../index.css';

const Header = ({ title }) => (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img src="https://s15-us2.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Foyster.ignimgs.com%2Fwordpress%2Fstg.ign.com%2F2016%2F08%2FOverlord-anime-teaser-009.png&sp=2aff0f8ee579b231ff7ecaf22d62aa8e&anticache=898772" alt="..." className="img-thumbnail"></img>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="/forum">Forum</a></li> 
            <li className="nav-item"><a className="nav-link" href="/profile">Profile</a></li>
          </ul>
          <ul className="form-inline justify-content-end">
              <li className="nav-item mr-sm-2"><a className="nav-link" href="/login">Login</a></li>
              <li className="nav-item my-2 my-sm-0"><a className="nav-link" href="/registration">Registration</a></li>
            </ul>
        </div>
      </nav>
      
      
      <hr />
      
      <h1>{title}</h1>
    </div>
  );
  export default Header;