import React, {useState, useEffect} from 'react';

const GetArrayInput = (props) => {
    const {inputArr, setInputArr, fetchCycles, setIsInputting} = props;
    const [input, setInput] = useState('');
    let errorString = '';

    const onSubmit = (e) => {
        e.preventDefault();
        Submit();
    }

    const Submit = () => {
        // Ensure input is an integer
        if (isNaN(Number.parseInt(input))) {
            return;
        }
        setInputArr([...inputArr, Number.parseInt(input)]);
        setInput('');
    }

    const onBack = () => {
        if (inputArr.length > 0) {
            setInput(inputArr[inputArr.length - 1])
            setInputArr(inputArr.slice(0, -1));
        }
        
    }

    const onDone = () => {
        if (inputArr.length < 1) {
            return;
        }
        setIsInputting(false);
        fetchCycles();
    }

    useEffect(() => {
        console.log(inputArr);
    }, [inputArr]);
    return (
        <form onSubmit={onSubmit}>
            <label>To add an element, enter an integer and sumbit. When you are
                finished, click done. If you wish to remove an element, click back</label>
            <br /><br />
            <label>{errorString}</label>
            <p>Array:</p>
            <ul>
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
            <button className="submitBtn" type="button" onClick={Submit}>Submit</button>
            <button className="backBtn" type="button" onClick={onBack}>Back</button>
            <button className="doneBtn" type="button" onClick={onDone}>Done</button>
            <button className="clearBtn" type="button" onClick={() => setInputArr([])}>Clear</button>
        </form>
    );
}

export default GetArrayInput;