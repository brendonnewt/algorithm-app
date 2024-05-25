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

const WorkFooter = (props) => {
    const {prevStep, nextStep} = props;
    return (
        <footer className="algorithmFooter">
            <button className="prevBtn" onClick={prevStep}>Prev</button>
            <button className="nextBtn" onClick={nextStep}>Next</button>
        </footer>
    );
}

export default WorkFooter;
