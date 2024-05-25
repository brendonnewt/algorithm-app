import React from 'react';
import WorkFooter from './WorkFooter';
import '../assets/styles/WorkPanel.css';

/**
 * @file WorkPanel.js
 * 
 * This component is responsible for rendering the work panel in the UI.
 * 
 * The WorkPanel component takes in several props:
 * - cycles: The array of cycles in the sorting algorithm
 * - currentCycle: The current cycle in the sorting algorithm
 * - currentStep: The current step in the sorting algorithm
 * - nextStep: A function to increment the current step
 * - prevStep: A function to decrement the current step
 * 
 * The component returns a div element containing the WorkFooter component.
 */

const WorkPanel = (props) => {
    const {cycles, currentCycle, currentStep, nextStep, prevStep} = props;
    return (
        <div className="workPanel">
            <h1>Work Panel</h1>
            <WorkFooter prevStep={prevStep} nextStep={nextStep}/>
        </div>
    );
}

export default WorkPanel;