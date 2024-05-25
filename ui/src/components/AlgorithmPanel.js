import React, { useEffect } from 'react';

import AlgorithmFooter from "./AlgorithmFooter";
import GetArrayInput from './GetArrayInput';
import ArrayPanel from './ArrayPanel';
import '../assets/styles/AlgorithmPanel.css';

const AlgorithmPanel = (props) => {
    const {cycles, currentStep, setCycles, 
        setCurrentCycle, setCurrentStep, inputArr, setInputArr,
        setOutputArr, outputArr, isInputting, setIsInputting, sort} = props;

    const fetchCycles = () => {
        setOutputArr([...inputArr]);
        const body = {
            sort: sort,
            arr: inputArr,
        };

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

    useEffect(() => {
        console.log(cycles);
    }, [cycles]);

    return (
        <div className="algorithmPanel">
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