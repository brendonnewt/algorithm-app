import React from 'react';

import AlgorithmFooter from "./AlgorithmFooter";
import GetArrayInput from './GetArrayInput';
import ArrayPanel from './ArrayPanel';
import '../assets/styles/AlgorithmPanel.css';

/**
 * @file AlgorithmPanel.js
 * 
 * This component is responsible for rendering the algorithm panel in the UI.
 * 
 * The AlgorithmPanel component takes in several props:
 * - cycles: The array of cycles in the sorting algorithm
 * - currentStep: The current step in the sorting algorithm
 * - setCycles: A function to set the cycles
 * - setCurrentCycle: A function to set the current cycle
 * - setCurrentStep: A function to set the current step
 * - inputArr: The input array
 * - setInputArr: A function to set the input array
 * - setOutputArr: A function to set the output array
 * - outputArr: The output array
 * - isInputting: A boolean to determine if the user is inputting an array
 * - setIsInputting: A function to set the isInputting boolean
 * - sort: The sorting algorithm
 * 
 * The component conditionally renders the GetArrayInput component or the ArrayPanel component based on the isInputting boolean.
 * 
 * The component returns a div element containing the GetArrayInput or ArrayPanel component and the AlgorithmFooter component.
 */

const AlgorithmPanel = (props) => {
    const {cycles, currentStep, setCycles, 
        setCurrentCycle, setCurrentStep, inputArr, setInputArr,
        setOutputArr, outputArr, isInputting, setIsInputting, sort} = props;
    
    /**
     * @function fetchCycles
     * @description Fetches the cycles from the backend
     * 
     * @returns {void}
     */
    const fetchCycles = () => {
        // Makes a copy of the input for UI
        setOutputArr([...inputArr]);
        // Formats the body of the request
        const body = {
            sort: sort,
            arr: inputArr,
        };

        // Fetches the cycles from the backend
        fetch('http://localhost:8080/api/algorithm/sort', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed');
        })
        .then(data => {
            setCycles([...cycles, ...data.cycles]);
        })
        .catch(error => console.error(error));
    }

    return (
        <div className="algorithmPanel">
            {/* Renders the input panel until user clicks done */}
            {isInputting ?

            <GetArrayInput 
            inputArr={inputArr}
            setInputArr={setInputArr}
            fetchCycles={fetchCycles}
            setIsInputting={setIsInputting}/>
            : 
            <ArrayPanel 
            outputArr={outputArr}
            currentStep={currentStep}
            />

            }
            <AlgorithmFooter 
            setCurrentCycle={setCurrentCycle}
            setCurrentStep={setCurrentStep}
            setCycles={setCycles}
            setIsInputting={setIsInputting}
            inputArr={inputArr}
            setOutputArr={setOutputArr}
            />
        </div>
    )
}

export default AlgorithmPanel;