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

const WorkPanel = ({cycles, currentCycle, currentStep, nextStep, prevStep,
    setCurrentCycle, setCurrentStep, setCycles, setIsInputting, isInputting, 
    inputArr, outputArr, setOutputArr, compared, stepString, result
}) => {
    return (
        <div className="workPanel">
            {isInputting ? '' :
            <p>
                {
                    compared.length > 0 ? stepString(outputArr[compared[0]], outputArr[compared[1]], result) 
                    : 'Comparisons will be shown here as the algorithm progresses. Click next to begin.'
                }
                
            </p>}
            <WorkFooter prevStep={prevStep} 
            nextStep={nextStep}
            cycles={cycles}
            currentCycle={currentCycle}
            currentStep={currentStep}
            setCurrentCycle={setCurrentCycle}
            setCurrentStep={setCurrentStep}
            setCycles={setCycles}
            setIsInputting={setIsInputting}
            isInputting={isInputting}
            inputArr={inputArr}
            setOutputArr={setOutputArr}/>
        </div>
    );
}

export default WorkPanel;