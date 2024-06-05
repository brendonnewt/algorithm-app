
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
    const stepString = (i, j, result) => {
        if (i === j) {
            if (result) {
                return "The pivot element is in its correct position.";
            } else {
                return `Select the pivot element, ${i}.`;
            }
        } else if (i > j) {
            if (result) {
                return `Swap the pivot element with ${j}, the first element in the array greater than the pivot value.`;
            } else {
                return `Compare ${i} to ${j}.`;
            }
        } else {
            if (result) {
                return `${i} is less than the pivot value. Swap ${j}, the first element found greater than the pivot value, with ${i}.`;
            } else {
                return `Compare ${i} to the pivot value ${j}.`;
            }
        }
    };
    const sort = "quick";
    const useIndicesForString = true;

    return (
        <div className="mainPanel">
            <SortPage stepString={stepString} sort={sort} useIndicesForString={useIndicesForString}/>
        </div>
    );
}

export default QuickSort;