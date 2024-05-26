import React from 'react';
import SortPage from '../components/SortPage';
import '../assets/styles/MainPanel.css';

const InsertionSort = () => {
    const stepString = "Compare elements at index i and i+1. If element at i is greater than element at i+1, swap them. Repeat this process for all elements in the array until no swaps are made.";
    const sort = "InsertionSort";

    /**
     * @function performStep
     * @description Performs the step by swapping the elements in the output array
     * @param {*} step
     * 
     * @returns {void}
     */
    const performStep = (step, outputArr, setOutputArr) => {
        // If the step is a swap step, swap the elements in the output array
        if (step && step.swapped) {
            const newOutputArr = [...outputArr];
            const [index1, index2] = step.compared[0];
            [newOutputArr[index1], newOutputArr[index2]] = [
                newOutputArr[index2],
                newOutputArr[index1],
            ];
            setOutputArr(newOutputArr);
        }
    };

    return (
        <div className="mainPanel">
            <SortPage stepString={stepString} sort={sort} performStep={performStep}/>
        </div>
    );
}

export default InsertionSort;