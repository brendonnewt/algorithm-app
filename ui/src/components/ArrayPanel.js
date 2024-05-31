import React from 'react';
import '../assets/styles/ArrayPanel.css';

/**
 * @file ArrayPanel.js
 * 
 * This component is responsible for rendering the array elements in the UI.
 * 
 * The ArrayPanel component takes in two props:
 * - outputArr: The array that is being sorted
 * - compared: The indices of the elements being compared
 * - isInputting: A boolean to determine if the user is inputting an array
 * 
 * The component maps over the outputArr and creates a div element for each array element.
 * 
 * If the index of the element is equal to the currentStep or the currentStep + 1, the div element is highlighted.
 * 
 * The component returns a div element containing all the array elements.
 * 
 */

const ArrayPanel = ({outputArr, compared, isInputting}) => {
    return (
        <div className={`arrayPanel ${isInputting ? '' : 'show'}`}>
        {/* Creates a div element for each array element */}
        {outputArr.map((element, index) => {
            return (
                <div key={index} className={compared.length > 0 ? 
                    (index === compared[0] || index === compared[1] ? `highlighted ${index === compared[0] ? '1' : '2'}`
                    : "")
                    : ""
                }>
                    {element}
                </div>
            );
        })}
        </div>
    );
}

export default ArrayPanel;