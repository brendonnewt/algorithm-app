import React, {useState} from 'react';
import '../assets/styles/GetArrayInput.css';

/**
 * @file GetArrayInput.js
 * 
 * This component is responsible for rendering the input array panel in the UI.
 * 
 * The GetArrayInput component takes in several props:
 * - inputArr: The array of integers that the user inputs
 * - setInputArr: A function to set the input array
 * - fetchCycles: A function to fetch the cycles from the backend
 * - setIsInputting: A function to set the isInputting state
 * 
 * The component uses the useState hook to manage the state of the input.
 * 
 * The component returns a form element containing an input element, a submit button, a back button, a done button, and a clear button.
 */

const GetArrayInput = ({inputArr, setInputArr, fetchCycles, setIsInputting, isInputting}) => {
    const [input, setInput] = useState('');
    let errorString = '';

    /**
     * @function onSubmit
     * @description Handles the form submission
     * 
     * @param {*} e 
     */
    const onSubmit = (e) => {
        e.preventDefault();
        Submit();
    }

    /**
     * @function Submit
     * @description Adds the input to the input array
     * 
     * @returns {void}
     */
    const Submit = () => {
        // Ensure input is an integer
        if (isNaN(Number.parseInt(input))) {
            return;
        }
        setInputArr([...inputArr, Number.parseInt(input)]);
        setInput('');
    }

    /**
     * @function onBack
     * @description Removes the last element from the input array
     * 
     * @returns {void}
     */
    const onBack = () => {
        if (inputArr.length > 0) {
            setInput(inputArr[inputArr.length - 1])
            setInputArr(inputArr.slice(0, -1));
        }
        
    }

    /**
     * @function onDone
     * @description Sets the isInputting state to false and fetches the cycles
     * 
     * @returns {void}
     */
    const onDone = () => {
        if (inputArr.length < 1) {
            return;
        }
        setIsInputting(false);
        fetchCycles();
    }

    return (
        <form onSubmit={onSubmit} className={`getInput ${isInputting ? 'show' : ''}`}>
            <label style={{textAlign: 'center', fontSize: '20px'}}>To add an element, enter an integer and click submit. When you are
                finished, click done. If you want to remove an element, click the back button</label>
            <br /><br />
            <label>{errorString}</label>
            <p style={{fontSize: '20px', textAlign: 'center'}}>Array:</p>
            <ul className='arr'>
                {/* Maps over the input array and creates a list element for each element */}
                {inputArr.map((element, index) => {
                    return <li key={index}>{element}</li>;
                })}
            </ul>
            <input
            type="number"
            value={input}
            onChange={e => setInput(e.target.value)}
            />
            <br /><br />
            <div className="btns">
                <button className="submitBtn" type="button" onClick={Submit}>Submit</button>
                <button className="backBtn" type="button" onClick={onBack}>Back</button>
                <button className="doneBtn" type="button" onClick={onDone}>Done</button>
                <button className="clearBtn" type="button" onClick={() => setInputArr([])}>Clear</button>
            </div>
        </form>
    );
}

export default GetArrayInput;