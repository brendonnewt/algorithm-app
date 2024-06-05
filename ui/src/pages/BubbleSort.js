/**
 * @file BubbleSort.js
 * 
 * This component is responsible for rendering the BubbleSort page in the UI.
 * 
 * The BubbleSort component returns a div element containing the SortPage component.
 * 
 * BubbleSort passes in the stepString and sort props to the SortPage component.
 */

import React from 'react';
import SortPage from '../components/SortPage';
import '../assets/styles/MainPanel.css';

const BubbleSort = () => {
    const stepString = (i, j, result) => `Compare ${i} and ${j}. ${result ? "Swap them" : "Do not swap them"}`;
    const sort = "bubble";
    const useIndicesForString = false;

    return (
        <div className="mainPanel">
            <SortPage stepString={stepString} sort={sort} useIndicesForString={useIndicesForString}/>
        </div>
    );
}

export default BubbleSort;