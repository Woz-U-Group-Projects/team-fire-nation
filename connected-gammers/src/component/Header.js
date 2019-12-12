import React from 'react';

const Header = ({ title }) => (
    <div>
      <div class="container">

      </div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img src="https://via.placeholder.com/50" alt="..." class="img-thumbnail"></img>
          Connected Gamers
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="/forum">Forum</a></li>
            <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
            <li className="nav-item"><a className="nav-link" href="/registration">registration</a></li>
            <li className="nav-item"><a className="nav-link" href="/profile">Profile</a></li>
          </ul>
        </div>
      </nav>
      
      
      <hr />
      
      <h1>{title}</h1>
    </div>
  );
  export default Header;