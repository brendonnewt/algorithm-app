import "../assets/styles/StepPanel.css";

const StepPanel = (props) => {
    const {currentCycle, stepString} = props;

    return (
        <div className="stepPanel">
            <h1>Step {currentCycle}:</h1>
            <p>{stepString}</p>
        </div>
    );
}

export default StepPanel;