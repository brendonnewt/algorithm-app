import React from 'react';
import '../assets/styles/AlgorithmFooter.css';

/**
 * @file AlgorithmFooter.js
 * 
 * This component is responsible for rendering the footer in the UI.
 * 
 * The AlgorithmFooter component takes in the following props:
 * - setCurrentCycle: A function to set the current cycle
 * - setCurrentStep: A function to set the current step
 * - setCycles: A function to set the cycles
 * - setIsInputting: A function to set the isInputting state
 * - inputArr: The input array
 * - setOutputArr: A function to set the output array
 * 
 * The component returns a footer element containing a restart button and a reset button.
 */

const AlgorithmFooter = ({prevStep, nextStep, isInputting}) => {

    return (
        <footer className={`algorithmFooter ${isInputting ? '' : 'show'}`}>
            <button className="prevBtn" onClick={prevStep}>Prev</button>
            <button className="nextBtn" onClick={nextStep}>Next</button>
        </footer>
    );
}

export default AlgorithmFooter;