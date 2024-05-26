import React from 'react';
import '../assets/styles/AlgorithmFooter.css';

/**
 * @file AlgorithmFooter.js
 * 
 * This component is responsible for rendering the footer in the UI.
 * 
 * The AlgorithmFooter component takes in three props:
 * - prevStep: A function that handles the previous step in the sorting algorithm
 * - nextStep: A function that handles the next step in the sorting algorithm
 * - isInputting: A boolean to determine if the user is inputting an array
 * 
 * The component returns a footer element containing two buttons.
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