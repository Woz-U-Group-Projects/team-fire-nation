import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from '../../../connected-gammers/src/components/screens/About';
import Comments from '../../../connected-gammers/src/components/screens/Posts';
import Forum from '../../../connected-gammers/src/components/screens/Forum';
import Home from '../../../connected-gammers/src/components/screens/home';
import Login from '../../../connected-gammers/src/components/screens/login';
import Profile from '../../../connected-gammers/src/components/screens/profile';
import Registration from '../../connected-gammers/src/components/screegistration';
y
function App() {
  return (
    <div className="App">
      <Home uri="http://localhost:3000/Home" />
    </div>
  );
}

export default App;
