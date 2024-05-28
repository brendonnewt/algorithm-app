import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BubbleSort from './pages/BubbleSort';
import InsertionSort from './pages/InsertionSort';
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
      case '/sorting/bubblesort':
        headerText = 'Bubble Sort';
        break;
      case '/sorting/insertionsort':
        headerText = 'Insertion Sort';
        break;
    // Add more cases as needed for other routes
    default:
      headerText = '';
  }

  return (
    <div className='app'>
      <Header text={headerText}/>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sorting/bubblesort" element={<BubbleSort />} />
        <Route path="/sorting/insertionsort" element={<InsertionSort />} />
        {/* Add more routes as needed for other pages */}
      </Routes>
    </div>
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

