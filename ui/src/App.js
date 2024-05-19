import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import './assets/styles/App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact component={HomePage} />
      </Routes>
    </Router>
  );
}

export default App;

