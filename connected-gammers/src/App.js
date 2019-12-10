import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/screens/Home';

function App() {
  return (
    <Home uri="http://localhost:3001/Home" />
  );
}

export default App;
