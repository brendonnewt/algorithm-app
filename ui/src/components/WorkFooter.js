import React from 'react';
import '../assets/styles/WorkFooter.css';

/**
 * @file WorkFooter.js
 * 
 * This component is responsible for rendering the work panel footer in the UI.
 * 
 * The WorkFooter component takes in the following props:
 * - setCurrentCycle: A function to set the current cycle
 * - setCurrentStep: A function to set the current step
 * - setCycles: A function to set the cycles
 * - setIsInputting: A function to set the isInputting state
 * - inputArr: The input array
 * - setOutputArr: A function to set the output array
 * 
 * The component returns a footer element containing a restart button and a reset button.
 */

const WorkFooter = ({setCurrentCycle, setCurrentStep, setCycles, isInputting, setIsInputting, inputArr, setOutputArr}) => {
    
    /**
     * @function restart
     * @description Restarts the algorithm by setting the current cycle and
     * current step to 0 and setting the output array to the input array.
     * 
     * @returns {void}
     */
    const restart = () => {
        setCurrentCycle(0);
        setCurrentStep(-1);
        setOutputArr([...inputArr]);
    }
    return (
        <footer className={`workFooter ${isInputting ? '' : 'show'}`}>
            {/* Reset button clears the cycles and sets the isInputting state to true */}
            <button className="resetBtn" onClick={() => {
            setCycles([]);
            setIsInputting(true);
            restart();
            }}>Close</button>
            <button className="restartBtn" onClick={restart}>Restart</button>
        </footer>
    );
}

export default WorkFooter;
