/**
 * @file SelectionSort.js is the page for the selection sort algorithm.
 * 
 * It imports the SortPage component and passes the stepString and sort props to it.
 * The stepString function returns a string based on the current step of the algorithm.
 * The sort prop is set to "selection" to indicate that the selection sort algorithm is being used.
 * 
 * The SortPage component is rendered within the mainPanel div.
 */
import React from 'react';
import SortPage from '../components/SortPage';
import '../assets/styles/MainPanel.css';

const SelectionSort = () => {
    let stepString = (i, j, result) => `${result ? 
        i === j ? "Element is already in the correct position" : "Place the smallest element found in the correct position" 
        : "Search for the smallest element in the unsorted section of the array"}.`;
    let sort = "selection";
    let useIndicesForString = false;

    return (
        <div className="mainPanel">
            <SortPage stepString={stepString} sort={sort} useIndicesForString={useIndicesForString}/>
        </div>
    );
}

export default SelectionSort;