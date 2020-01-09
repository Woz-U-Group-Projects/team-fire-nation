import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import About from './screens/About';
import Forum from './screens/Forum';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Profile from './screens/Profile';
import Home from './screens/Home';

const Index = ({pathname}) => {
  switch (pathname) {
    case '/about':
      return <About />;
    case '/forum':
      return <Forum />;
    case '/login':
      return <Login />;
    case '/signup':
      return <Signup />;
    case '/profile':
      return <Profile />;
    default:
      return <Home />;
  }
};

let pathname = window.location.pathname;

ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'));

window.addEventListener('popstate', () => {
  pathname = window.location.pathname;
}); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
