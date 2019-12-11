import React from 'react';

const Header = ({ title }) => (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
        <li className="nav-item"><a className="nav-link" href="/forum">Forum</a></li>
        <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
        <li className="nav-item"><a className="nav-link" href="/registration">registration</a></li>
        <li className="nav-item"><a className="nav-link" href="/profile">Profile</a></li>
      </ul>
      <hr />
      <img src="https://via.placeholder.com/150" alt="..." class="img-thumbnail"></img>
      <h1>{title}</h1>
    </div>
  );
  export default Header;