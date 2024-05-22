import React from 'react';
import StepPanel from './StepPanel';
import WorkPanel from './WorkPanel';
import '../assets/styles/AlgorithmSection.css';

const AlgorithmSection = (props) => {
    const {cycles, currentCycle, currentStep, nextStep, prevStep} = props;
    return (
        <div className="algorithmSection">
            <StepPanel currentCycle={currentCycle} currentStep={currentStep}/>
            <WorkPanel 
            cycles={cycles}
            currentStep={currentStep}
            nextStep={nextStep}
            prevStep={prevStep}
            />
        </div>
    );
}

export default AlgorithmSection;