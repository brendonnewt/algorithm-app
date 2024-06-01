import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BubbleSort from './pages/BubbleSort';
import InsertionSort from './pages/InsertionSort';
import SelectionSort from './pages/SelectionSort';
import './assets/styles/App.css';
import Header from './components/Header';
import Nav from './components/Nav';

function Main() {
  const location = useLocation();
  let headerText;

  switch (location.pathname) {
    case '/':
      headerText = 'Sorting Algorithm Visualizer';
      break;
      case '/sorting/bubblesort':
        headerText = 'Bubble Sort';
        break;
      case '/sorting/insertionsort':
        headerText = 'Insertion Sort';
        break;
      case '/sorting/selectionsort':
        headerText = 'Selection Sort';
        break;
      case '/sorting/mergesort':
        headerText = 'TODO: Merge Sort';
        break;
      case '/sorting/quicksort':
        headerText = 'TODO: Quick Sort';
        break;
      case '/sorting/heapsort':
        headerText = 'TODO: Heap Sort';
        break;
      case '/graph/dijkstra':
        headerText = 'TODO: Dijkstra\'s Algorithm';
        break;
      case '/graph/kruskal':
        headerText = 'TODO: Kruskal\'s Algorithm';
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
        <Route path="/sorting/selectionsort" element={<SelectionSort />} />
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

