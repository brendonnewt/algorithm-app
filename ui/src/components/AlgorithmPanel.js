import React, { useEffect } from 'react';

import AlgorithmFooter from "./AlgorithmFooter";
import '../assets/styles/AlgorithmPanel.css';

const AlgorithmPanel = (props) => {
    const {cycles, currentStep, setCycles} = props;

    const addCycle = () => {
        let newCycles = [...cycles];
        newCycles.push([]);
        setCycles(newCycles);
    }

    const fetchCycles = () => {
        const body = {
            sort: "BubbleSort",
            arr: [5, 4, 3, 2, 1],
        }

        fetch('http://localhost:8080/api/algorithm/sort', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCycles(data);
        })
        .catch(error => console.error(error));
    }

    useEffect(() => {
        fetchCycles();
    }, []);

    return (
        <div className="algorithmPanel">
            <h1>Algorithm Panel</h1>
            <AlgorithmFooter />
        </div>
    )
}

export default AlgorithmPanel;