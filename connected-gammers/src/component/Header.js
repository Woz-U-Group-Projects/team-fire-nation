import React from 'react';

const Header = ({ title }) => (
    <div>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/forum">Forum</a>
      <a href="/login">Login</a>
      <a href="/registration">registration</a>
      <a href="/profile">Profile</a>
      <hr />
      <h1>{title}</h1>
    </div>
  );
  export default Header;