import React, {useState} from "react";

import "../assets/styles/StepPanel.css";

const StepPanel = (props) => {
    const {currentStep} = props;
    return (
        <div className="stepPanel">
            <h1>Step Panel</h1>
        </div>
    );
}

export default StepPanel;