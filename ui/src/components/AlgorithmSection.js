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
 * - setCurrentCycle: A function to set the current cycle
 * - setCurrentStep: A function to set the current step
 * - setCycles: A function to set the cycles
 * - setIsInputting: A function to set the isInputting boolean
 * - isInputting: A boolean to determine if the user is inputting an array
 * - inputArr: The input array
 * - outputArr: The output array
 * - setOutputArr: A function to set the output array
 * - compared: The indices of the elements being compared
 * - setCompared: A function to set the compared indices
 * - result: The result of the sorting algorithm
 * - done: A boolean to determine if the algorithm is done
 * - setDone: A function to set the done boolean
 * 
 * The component returns a div element containing the StepPanel and WorkPanel components.
 */

const AlgorithmSection = ({cycles, currentCycle, currentStep, nextStep, prevStep, stepString,
    setCurrentCycle, setCurrentStep, setCycles, setIsInputting, isInputting, inputArr, outputArr,
    setOutputArr, compared, setCompared, result, done, setDone, useIndicesForString
}) => {
    return (
        <div className="algorithmSection">
            <StepPanel 
            currentCycle={currentCycle}
            isInputting={isInputting}
            />
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
            setCompared={setCompared}
            result={result}
            done={done}
            setDone={setDone}
            useIndicesForString={useIndicesForString}
            />
        </div>
    );
}

export default AlgorithmSection;