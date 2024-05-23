import React, { useState, useEffect } from 'react';

import AlgorithmFooter from "./AlgorithmFooter";
import GetArrayInput from './GetArrayInput';
import '../assets/styles/AlgorithmPanel.css';

const AlgorithmPanel = (props) => {
    const {cycles, currentStep, setCycles, setCurrentCycle, setCurrentStep} = props;
    const [inputArr, setInputArr] = useState([]);
    const [isInputting, setIsInputting] = useState(true);

    const fetchCycles = () => {
        const body = {
            sort: "BubbleSort",
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
    }, [cycles])

    return (
        <div className="algorithmPanel">
            {isInputting ?
            <GetArrayInput 
            inputArr={inputArr}
            setInputArr={setInputArr}
            fetchCycles={fetchCycles}
            setIsInputting={setIsInputting}/>
            : null}
            <h1>Algorithm Panel</h1>
            <AlgorithmFooter 
            setCurrentCycle={setCurrentCycle}
            setCurrentStep={setCurrentStep}
            setCycles={setCycles}
            setIsInputting={setIsInputting}
            />
        </div>
    )
}

export default AlgorithmPanel;