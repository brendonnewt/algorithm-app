/**
 * @file WorkFooter.js
 * 
 * This component is responsible for rendering the footer in the UI.
 * 
 * The WorkFooter component takes in two props:
 * - prevStep: A function that handles the previous step in the sorting algorithm
 * - nextStep: A function that handles the next step in the sorting algorithm
 * 
 * The component returns a footer element containing two buttons.
 */

const WorkFooter = ({setCurrentCycle, setCurrentStep, setCycles, isInputting, setIsInputting, inputArr, setOutputArr}) => {
    
    /**
     * @function restart
     * @description Restarts the algorithm by setting the current cycle and
     * current step to 0 and setting the output array to the input array.
     * 
     * @returns {void}
     */
    const restart = () => {
        setCurrentCycle(0);
        setCurrentStep(-1);
        setOutputArr([...inputArr]);
    }
    return (
        <footer className={`workFooter ${isInputting ? '' : 'show'}`}>
            {/* Reset button clears the cycles and sets the isInputting state to true */}
            <button className="resetBtn" onClick={() => {
            setCycles([]);
            setIsInputting(true);
            restart();
            }}>Close</button>
            <button className="restartBtn" onClick={restart}>Restart</button>
        </footer>
    );
}

export default WorkFooter;
