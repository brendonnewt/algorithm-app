import React from 'react';
import StepPanel from './StepPanel';
import WorkPanel from './WorkPanel';
import '../assets/styles/AlgorithmSection.css';

/**
 * @file AlgorithmSection.js
 * 
 * This component is responsible for rendering the algorithm section in the UI.
 * 
 * The AlgorithmSection component takes in several props:
 * - cycles: The array of cycles in the sorting algorithm
 * - currentCycle: The current cycle in the sorting algorithm
 * - currentStep: The current step in the sorting algorithm
 * - nextStep: A function to increment the current step
 * - prevStep: A function to decrement the current step
 * - stepString: The description of the current step
 * 
 * The component returns a div element containing the StepPanel and WorkPanel components.
 */

const AlgorithmSection = ({cycles, currentCycle, currentStep, nextStep, prevStep, stepString}) => {
    return (
        <div className="algorithmSection">
            <StepPanel currentCycle={currentCycle} stepString={stepString}/>
            <WorkPanel 
            cycles={cycles}
            currentStep={currentStep}
            nextStep={nextStep}
            prevStep={prevStep}
            />
        </div>
    );
}

export default AlgorithmSection;