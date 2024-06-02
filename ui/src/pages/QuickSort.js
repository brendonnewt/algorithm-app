
import React from 'react';
import SortPage from '../components/SortPage';
import '../assets/styles/MainPanel.css';

/**
 * @file QuickSort.js is the page for the Quick Sort algorithm.
 * 
 * The QuickSort component returns a div element containing the SortPage component.
 * 
 * QuickSort passes in the stepString and sort props to the SortPage component.
 */

const QuickSort = () => {
    const stepString = (i, j, result) => `Compare ${i} and ${j}. ${result ? "Swap them" : "Do not swap them"}`;
    const sort = "quick";

    return (
        <div className="mainPanel">
            <SortPage stepString={stepString} sort={sort}/>
        </div>
    );
}

export default QuickSort;