import React from 'react';
import StepPanel from './StepPanel';
import WorkPanel from './WorkPanel';
import '../assets/styles/AlgorithmSection.css';

const AlgorithmSection = (props) => {
    const {steps, currentStep, nextStep, prevStep} = props;
    return (
        <div className="algorithmSection">
            <StepPanel currentStep={currentStep}/>
            <WorkPanel 
            steps={steps}
            currentStep={currentStep}
            nextStep={nextStep}
            prevStep={prevStep}
            />
        </div>
    );
}

export default AlgorithmSection;