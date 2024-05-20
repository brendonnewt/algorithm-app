import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './assets/styles/App.css';
import Header from './components/Header';
import Nav from './components/Nav';

function Main() {
  const location = useLocation();
  let headerText;

  switch (location.pathname) {
    case '/':
      headerText = 'CSI 3344 Crash Course';
      break;
    case '/about':
      headerText = 'About';
      break;
    // Add more cases as needed for other routes
    default:
      headerText = '';
  }

  return (
    <>
      <Header text={headerText}/>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;

