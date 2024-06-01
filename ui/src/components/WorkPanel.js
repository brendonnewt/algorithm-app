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
 * - stepString: The description of the current step
 * - setCurrentCycle: A function to set the current cycle
 * - setCurrentStep: A function to set the current step
 * - setCycles: A function to set the cycles
 * - setIsInputting: A function to set the isInputting boolean
 *  - isInputting: A boolean to determine if the user is inputting an array
 * - inputArr: The input array
 * - outputArr: The output array
 * - setOutputArr: A function to set the output array
 * - compared: The indices of the elements being compared
 * - setCompared: A function to set the compared indices
 * - result: The result of the sorting algorithm
 * - done: A boolean to determine if the algorithm is done
 * - setDone: A function to set the done boolean
 * 
 * The component returns a div element containing the WorkFooter component.
 */

const WorkPanel = ({cycles, currentCycle, currentStep, nextStep, prevStep,
    setCurrentCycle, setCurrentStep, setCycles, setIsInputting, isInputting, 
    inputArr, outputArr, setOutputArr, compared, setCompared, stepString, result,
    done, setDone
}) => {
    return (
        <div className="workPanel">
            {isInputting ? '' :
            <p>
                {
                    done ? 'The algorithm is done. Click prev to see the steps again.' :
                    compared.length > 0 ? stepString(outputArr[compared[0]], outputArr[compared[1]], result) :
                    'Comparisons will be shown here as the algorithm progresses. Click next to begin.'
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
            setOutputArr={setOutputArr}
            setCompared={setCompared}
            setDone={setDone}
            />
            
        </div>
    );
}

export default WorkPanel;