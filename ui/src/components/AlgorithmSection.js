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

const AlgorithmSection = ({cycles, currentCycle, currentStep, nextStep, prevStep, stepString,
    setCurrentCycle, setCurrentStep, setCycles, setIsInputting, isInputting, inputArr, outputArr,
    setOutputArr, compared, result
}) => {
    return (
        <div className="algorithmSection">
            <StepPanel currentCycle={currentCycle}/>
            <WorkPanel 
            setCurrentCycle={setCurrentCycle}
            setCurrentStep={setCurrentStep}
            setCycles={setCycles}
            setIsInputting={setIsInputting}
            isInputting={isInputting}
            outputArr={outputArr}
            inputArr={inputArr}
            setOutputArr={setOutputArr}
            cycles={cycles}
            currentStep={currentStep}
            nextStep={nextStep}
            prevStep={prevStep}
            stepString={stepString}
            compared={compared}
            result={result}
            />
        </div>
    );
}

export default AlgorithmSection;