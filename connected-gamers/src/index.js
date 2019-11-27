import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand">Connected Gamers</a>
                <ul className="nav mr-auto btn-group btn-group-nav-items "> 
                    <li className="nav-time">
                        <a className="nav-link" href="#"><button className="btn btn-outline-primary btn-lg">Forum</button></a>
                    </li>
                    <li className="nav-time">
                        <a className="nav-link" href="#"><button className="btn btn-outline-info btn-lg">About</button></a>
                    </li>
                </ul>
                <form className="form-inline">
                    <button className="btn btn-outline-success" type="button">Login</button>
                    <button className="btn btn-outline-primary" type="button">Signup</button>
                </form>
            </nav>
            <div className="jumbotron text-center">
                <h1>Welcome to Connected Gamers</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
                <hr class="my-4"></hr>
                <p className="">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            {/* Twitter feed */}
            <a class="twitter-timeline" data-theme="dark" data-link-color="#9266CC" href="https://twitter.com/VGFGamers?ref_src=twsrc%5Etfw">Tweets by VGFGamers</a>
        </div>
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
