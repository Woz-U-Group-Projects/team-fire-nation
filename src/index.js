import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Home from './screens/Home';
import About from './screens/About';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Registration from './screens/Registration';
import Forum from './screens/Forum';

const Index = ({ pathname }) => {
    switch (pathname) {
        case '/profile':
        return <Profile />;
        case '/login':
        return <Login />;
        case '/registration':
        return < Registration />;
        case '/about':
        return <About />;
        case '/topics':
        return <Forum />;
        default:
        return <Home />;
    }
};
  
let pathname = window.location.pathname;

ReactDOM.render(<App />, document.getElementById('root'));

window.addEventListener('popstate', () => {
    pathname = window.location.pathname;
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
