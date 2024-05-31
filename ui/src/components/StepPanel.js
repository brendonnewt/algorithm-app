import "../assets/styles/StepPanel.css";

/**
 * @file StepPanel.js
 * 
 * This component is responsible for rendering the current step in the sorting algorithm.
 * 
 * The StepPanel component takes in two props:
 * - currentCycle: The current cycle in the sorting algorithm
 * - isInputting: A boolean to determine if the user is inputting an array
 * 
 * The component renders the current cycle and the description of the current step.
 * 
 * The component returns a div element containing the current cycle and the description of the current step.
 */

const StepPanel = ({currentCycle, isInputting}) => {

    return (
        <div className="stepPanel">
            {isInputting ? "" : <h1>Cycle {currentCycle + 1}:</h1>}
        </div>
    );
}

export default StepPanel;