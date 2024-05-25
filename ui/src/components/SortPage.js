/**
 * @file SortPage.js
 * 
 * This component is responsible for rendering the main panel in the UI.
 * 
 * The SortPage component takes in two props:
 * - stepString: The description of the step for the algorithm
 * - sort: The sorting algorithm
 * 
 * The component uses the useState hook to manage the state of the current cycle, current step, step, input array, output array, and isInputting boolean.
 * 
 * The component uses the useEffect hook to update the step and perform the step when the current step or cycle changes.
 * 
 * The component returns a div element containing the AlgorithmPanel and AlgorithmSection components.
 */

import React, { useState, useEffect } from "react";
import AlgorithmPanel from "./AlgorithmPanel";
import AlgorithmSection from "./AlgorithmSection";

const SortPage = ({ stepString, sort }) => {
    const [cycles, setCycles] = useState([]);   //  Passed up from AlgorithmPanel
    const [currentCycle, setCurrentCycle] = useState(0);    // Tracks the current cycle
    const [currentStep, setCurrentStep] = useState(0);  // Tracks the current step
    const [step, setStep] = useState(-1);   // The current step, starts at -1 so nextStep increments to 0
    const [inputArr, setInputArr] = useState([]);   // Passed up from AlgorithmPanel/GetArrayInput
    const [outputArr, setOutputArr] = useState([]); // Passed up from AlgorithmPanel, used to display the arrays changes
    const [isInputting, setIsInputting] = useState(true);   // Tracks if the user is inputting an array

    /**
     * @function nextStep
     * @description Increments the current step, if the current step is the last step in the cycle, it increments the current cycle
     * 
     * @returns {void}
     */
    const nextStep = () => {
        // If the cycle is empty, algorithm is done (broke early)
        if (cycles[currentCycle].cycle.length === 0) {
            return;
        }

        // If the current step is not the last step in the cycle, increment the step
        if (currentStep < cycles[currentCycle].cycle.length - 1) {
            setCurrentStep(currentStep + 1);
        // If the current step is the last step in the cycle, increment the cycle and reset the step
        } else if (currentCycle < cycles.length - 1) {
            setCurrentCycle(currentCycle + 1);
            setCurrentStep(0);
        }
    };

    /**
     * @function prevStep
     * @description Decrements the current step, if the current step is the first step in the cycle, it decrements the current cycle
     * 
     * @returns {void}
     */
    const prevStep = () => {
        // Allows currentStep to be decremented to -1 so nextStep can increment back to 0
        if (currentCycle === 0) {
            // If the current step is 0, decrement the cycle
            if (currentStep >= 0) {
                setCurrentStep(currentStep - 1);
            }
            return;
        }

        // If the current step is not the first step in the cycle, decrement the step
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        // If the current step is the first step in the cycle, decrement the cycle and set the step to the last step in the cycle
        } else if (currentCycle > 0) {
            setCurrentCycle(currentCycle - 1);
            setCurrentStep(cycles[currentCycle - 1].cycle.length - 1);
        }
    };

    /**
     * @function performStep
     * @description Performs the step by swapping the elements in the output array
     * @param {*} step 
     * 
     * @returns {void}
     */
    const performStep = (step) => {
        // If the step is a swap step, swap the elements in the output array
        if (step && step.swapped) {
            const newOutputArr = [...outputArr];
            const [index1, index2] = step.compared[0];
            [newOutputArr[index1], newOutputArr[index2]] = [
                newOutputArr[index2],
                newOutputArr[index1],
            ];
            setOutputArr(newOutputArr);
        }
    };

    // When the current step or cycle changes, update the step and perform the step
    useEffect(() => {
        if (
            cycles.length > 0 &&
            currentStep >= 0 &&
            cycles[currentCycle] &&
            cycles[currentCycle].cycle[currentStep]
        ) {
            const newStep = cycles[currentCycle].cycle[currentStep];
            setStep(newStep);
            performStep(newStep);
        }
    }, [currentStep, currentCycle]);

    return (
        <div className="mainPanel">
            <AlgorithmPanel
                cycles={cycles}
                currentStep={currentStep}
                currentCycle={currentCycle}
                setCycles={setCycles}
                setCurrentCycle={setCurrentCycle}
                setCurrentStep={setCurrentStep}
                inputArr={inputArr}
                setInputArr={setInputArr}
                isInputting={isInputting}
                setIsInputting={setIsInputting}
                outputArr={outputArr}
                setOutputArr={setOutputArr}
                sort={sort}
            />
            <AlgorithmSection
                cycles={cycles}
                currentCycle={currentCycle}
                currentStep={currentStep}
                nextStep={nextStep}
                prevStep={prevStep}
                stepString={stepString}
            />
        </div>
    );
};

export default SortPage;
