/**
 * @file InsertionSort.js is the page for the Insertion Sort algorithm.
 * 
 * The InsertionSort component returns a div element containing the SortPage component.
 * 
 * InsertionSort passes in the stepString and sort props to the SortPage component.
 * 
 * The stepString function describes the step for the algorithm.
 * The sort prop is the sorting algorithm.
 * 
 * The component returns a div element containing the SortPage component.
 */
import React from 'react';
import SortPage from '../components/SortPage';
import '../assets/styles/MainPanel.css';

const InsertionSort = () => {
    const stepString = (i, j, result) => `Compare ${i} and ${j}. ${result ? "Swap them" : "Do not swap them"}`;
    const sort = "insertion";

    return (
        <div className="mainPanel">
            <SortPage stepString={stepString} sort={sort}/>
        </div>
    );
}

export default InsertionSort;