import React, { useState } from 'react';
import AlgorithmPanel from "../components/AlgorithmPanel";
import AlgorithmSection from "../components/AlgorithmSection";
import '../assets/styles/MainPanel.css';

const BubbleSort = () => {
    const [cycles, setCycles] = useState([]);
    const [currentCycle, setCurrentCycle] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const stepString = "Compare elements at index i and i+1. If element at i is greater than element at i+1, swap them. Repeat this process for all elements in the array until no swaps are made.";

    const nextStep = () => {
        if (currentStep < cycles[currentCycle].length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            if (currentCycle < cycles.length - 1) {
                setCurrentCycle(currentCycle + 1);
                setCurrentStep(0);
            }
        }
    }

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        } else {
            if (currentCycle > 0) {
                setCurrentCycle(currentCycle - 1);
                setCurrentStep(cycles[currentCycle - 1].length - 1);
            }
        }
    }
    return (
        <div className="mainPanel">
            <AlgorithmPanel 
            cycles={cycles}
            currentStep={currentStep}
            setCycles={setCycles}
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
}

export default BubbleSort;