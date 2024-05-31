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

import React, { useState, useEffect, useRef } from "react";
import AlgorithmPanel from "./AlgorithmPanel";
import AlgorithmSection from "./AlgorithmSection";

const SortPage = ({stepString, sort, performStep}) => {
    const [cycles, setCycles] = useState([]);   //  Passed up from AlgorithmPanel
    const [currentCycle, setCurrentCycle] = useState(0);    // Tracks the current cycle
    const [currentStep, setCurrentStep] = useState(-1);  // Tracks the current step
    const [inputArr, setInputArr] = useState([]);   // Passed up from AlgorithmPanel/GetArrayInput
    const [outputArr, setOutputArr] = useState([]); // Passed up from AlgorithmPanel, used to display the arrays changes
    const [isInputting, setIsInputting] = useState(true);   // Tracks if the user is inputting an array
    const isManualStep = useRef(false);   // Tracks if the user is manually stepping through the algorithm
    const [compared, setCompared] = useState([]); // Tracks the indexes of the elements being compared
    const [result, setResult] = useState(false); // Tracks the result of the algorithm
    const [done, setDone] = useState(false); // Tracks if the algorithm is done
    /**
     * @function nextStep
     * @description Increments the current step, if the current step is the last step in the cycle, it increments the current cycle
     * 
     * @returns {void}
     */
    const nextStep = () => {

        // If the current step is not the last step in the cycle, increment the step
        if (currentStep < cycles[currentCycle].cycle.length - 1) {
            setCurrentStep(currentStep + 1);
        // If the current step is the last step in the cycle, increment the cycle and reset the step
        } else if (currentCycle < cycles.length - 1) {
            setCurrentCycle(currentCycle + 1);
            setCurrentStep(0);
        } else {
            setDone(true);
        }
    };

    /**
     * @function prevStep
     * @description Decrements the current step, if the current step is the first step in the cycle, it decrements the current cycle
     * 
     * @returns {void}
     */
    const prevStep = () => {

        // If marked as done, reset the done state
        if (done) {
            setDone(false);
        }

        // Allows currentStep to be decremented to -1 so nextStep can increment back to 0
        if (currentCycle === 0 && currentStep === 0) {
            isManualStep.current = true;
            performStep(cycles[currentCycle].cycle[currentStep], outputArr, setOutputArr, setCompared, setResult);
            setCurrentStep(-1);
            setCompared([]);
            return;
        }

        // Beginning has been reached
        if (currentStep === -1) {
            return;
        }

        isManualStep.current = true;
        performStep(cycles[currentCycle].cycle[currentStep], outputArr, setOutputArr, setCompared, setResult);

        // If the current step is not the first step in the cycle, decrement the step
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
            if (cycles[currentCycle].cycle[currentStep] !== undefined) {
                // Set the step description to the prev step
                const [index1, index2] = cycles[currentCycle].cycle[currentStep].compared[0];
                setResult(cycles[currentCycle].cycle[currentStep].swapped);
                setCompared([index1, index2]);
                setResult(cycles[currentCycle].cycle[currentStep].swapped);
            }
            // Decrement the step
        // If the current step is the first step in the cycle, decrement the cycle and set the step to the last step in the cycle
        } else {
            // Decrement the cycle and step
            setCurrentCycle(currentCycle - 1);
            setCurrentStep(cycles[currentCycle - 1].cycle.length - 1);
            if (cycles[currentCycle].cycle[currentStep] !== undefined) {
                // Set the step description to the prev step
                const [index1, index2] = cycles[currentCycle].cycle[currentStep].compared[0];
                setCompared([index1, index2]);
                setResult(cycles[currentCycle].cycle[currentStep].swapped);
            }
        }
    };

    // When the current step or cycle changes, update the step and perform the step
    useEffect(() => {
        // When a user goes back in the middle somewhere
        if (isManualStep.current) {
            isManualStep.current = false;
            return;
        }
        // On normal use case
        if (
            cycles.length > 0 &&
            currentStep >= 0 &&
            cycles[currentCycle] &&
            cycles[currentCycle].cycle[currentStep]
        ) {
            console.log(currentCycle, currentStep);
            const step = cycles[currentCycle].cycle[currentStep];
            performStep(step, outputArr, setOutputArr, setCompared, setResult);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                prevStep={prevStep}
                nextStep={nextStep}
                compared={compared}
            />
            <AlgorithmSection
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
                compared={compared}
                setCompared={setCompared}
                setOutputArr={setOutputArr}
                sort={sort}
                stepString={stepString}
                result={result}
                done={done}
            />
        </div>
    );
};

export default SortPage;
