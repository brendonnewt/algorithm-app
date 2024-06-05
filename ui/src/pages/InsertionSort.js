import React from 'react';
import SortPage from '../components/SortPage';
import '../assets/styles/MainPanel.css';

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

const InsertionSort = () => {
    const stepString = (i, j, result) => `${result ? `Swap ${i} with the element to the left until it's in the correct spot` : `${i} is in the correct spot`}`;
    const sort = "insertion";
    const useIndicesForString = false;

    return (
        <div className="mainPanel">
            <SortPage stepString={stepString} sort={sort} useIndicesForString={useIndicesForString}/>
        </div>
    );
}

export default InsertionSort;