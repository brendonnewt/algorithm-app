import React from 'react';
import StepPanel from './StepPanel';
import WorkPanel from './WorkPanel';
import '../assets/styles/AlgorithmSection.css';

const AlgorithmSection = () => {
    return (
        <div className="algorithmSection">
            <StepPanel />
            <WorkPanel />
        </div>
    );
}

export default AlgorithmSection;