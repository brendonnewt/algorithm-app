import React from 'react';
import SortPage from '../components/SortPage';
import '../assets/styles/MainPanel.css';

const InsertionSort = () => {
    const stepString = (i, j, result) => `Compare ${i} and ${j}. ${result ? "Swap them" : "Do not swap them"}`;
    const sort = "InsertionSort";

    /**
     * @function performStep
     * @description Performs the step by swapping the elements in the output array
     * @param {*} step
     * 
     * @returns {void}
     */
    const performStep = (step, outputArr, setOutputArr, setCompared, setResult) => {
        // If the step is a swap step, swap the elements in the output array
        if (!step) return;
        
        // Get the indices of the elements being compared
        const [index1, index2] = step.compared[0];
        console.log(step.compared[0])
        setCompared([index1, index2]);
        
        // If the step is a swap step, swap the elements in the output array
        if (step.swapped) {
            setResult(true);
            const newOutputArr = [...outputArr];
            [newOutputArr[index1], newOutputArr[index2]] = [
                newOutputArr[index2],
                newOutputArr[index1],
            ];
            setOutputArr(newOutputArr);
        } else {
            setResult(false);
        }
    };

    return (
        <div className="mainPanel">
            <SortPage stepString={stepString} sort={sort} performStep={performStep}/>
        </div>
    );
}

export default InsertionSort;