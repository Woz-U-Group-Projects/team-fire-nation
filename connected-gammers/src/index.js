import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import Home from './components/screens/Home';
import About from './components/screens/About';
import Login from './components/screens/Login';
import Profile from './components/screens/Profile';
import Registration from './components/screens/Registration';
import Forum from './components/screens/Forum';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/forum">Forum</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/registration">Registration</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
            <hr />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/forum" component={Forum} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/profile" component={Profile} />
         </div>
    </Router>

);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
