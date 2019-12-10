import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import Home from './screens/Home';
import About from './screens/About';
import Forum from './screens/Forum';
import Login from './screens/Login';
import Registration from './screens/Registration';
import Profile from './screens/Profile';

const Index = ({ pathname }) => {
    switch (pathname) {
      case '/about':
        return <About />;

      case '/forum':
        return <Forum />;

      case '/login':
        return <Login />;

      case '/registration':
        return <Registration />;
    
      case '/profile':
          return <Profile />

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
