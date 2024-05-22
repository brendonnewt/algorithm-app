import React from 'react';
import WorkFooter from './WorkFooter';
import '../assets/styles/WorkPanel.css';

const WorkPanel = (props) => {
    const {cycles, currentCycle, currentStep, nextStep, prevStep} = props;
    return (
        <div className="workPanel">
            <h1>Work Panel</h1>
            <WorkFooter prevStep={prevStep} nextStep={nextStep}/>
        </div>
    );
}

export default WorkPanel;