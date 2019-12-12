import React, { component } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import Home from './components/screens/Home';
import About from './components/screens/About';
import Login from './components/screens/Login';
import Profile from './components/screens/Profile';
import Registration from './components/screens/Registration';
import Forum from './components/screens/Forum';

const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Forum</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/">Registration</Link></li>
                <li><Link to="/">Profile</Link></li>
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

  
