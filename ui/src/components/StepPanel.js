import "../assets/styles/StepPanel.css";

/**
 * @file StepPanel.js
 * 
 * This component is responsible for rendering the current step in the sorting algorithm.
 * 
 * The StepPanel component takes in two props:
 * - currentCycle: The current cycle in the sorting algorithm
 * - stepString: The description of the current step
 * 
 * The component renders the current cycle and the description of the current step.
 * 
 * The component returns a div element containing the current cycle and the description of the current step.
 */

const StepPanel = ({currentCycle}) => {

    return (
        <div className="stepPanel">
            <h1>Cycle {currentCycle}:</h1>
        </div>
    );
}

export default StepPanel;