import React from 'react';
import '../assets/styles/ArrayPanel.css';

/**
 * @file ArrayPanel.js
 * 
 * This component is responsible for rendering the array elements in the UI.
 * 
 * The ArrayPanel component takes in two props:
 * - outputArr: The array that is being sorted
 * - currentStep: The current step in the sorting algorithm
 * 
 * The component maps over the outputArr and creates a div element for each array element.
 * 
 * If the index of the element is equal to the currentStep or the currentStep + 1, the div element is highlighted.
 * 
 * The component returns a div element containing all the array elements.
 * 
 */

const ArrayPanel = ({outputArr, currentStep, isInputting}) => {
    return (
        <div className={`arrayPanel ${isInputting ? '' : 'show'}`}>
        {/* Creates a div element for each array element */}
        {outputArr.map((element, index) => {
            return (
                <div key={index} className={index === currentStep || index === currentStep + 1 ? "highlighted" : ""}>
                    {element}
                </div>
            );
        })}
        </div>
    );
}

export default ArrayPanel;