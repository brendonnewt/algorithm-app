import "../assets/styles/StepPanel.css";

const StepPanel = (props) => {
    const {currentCycle, currentStep} = props;
    return (
        <div className="stepPanel">
            <h1>Step {currentCycle}</h1>
            <p>{currentStep}</p>
        </div>
    );
}

export default StepPanel;