import React, { useState } from 'react';
import AlgorithmPanel from "../components/AlgorithmPanel";
import AlgorithmSection from "../components/AlgorithmSection";
import '../assets/styles/MainPanel.css';

const BubbleSort = () => {
    const [steps, setSteps] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    }

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    }
    return (
        <div className="mainPanel">
            <AlgorithmPanel 
            steps={steps}
            currentStep={currentStep}
            setSteps={setSteps}
            />
            <AlgorithmSection 
            steps={steps}
            currentStep={currentStep}
            nextStep={nextStep}
            prevStep={prevStep}
            />
        </div>
    );
}

export default BubbleSort;