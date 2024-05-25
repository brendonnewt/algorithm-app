const AlgorithmFooter = (props) => {
    const {setCurrentCycle, setCurrentStep, setCycles, setIsInputting, inputArr, setOutputArr} = props;

    const restart = () => {
        setCurrentCycle(0);
        setCurrentStep(0);
        setOutputArr([...inputArr]);
    }
    return (
        <footer className="algorithmFooter">
        <button className="restartBtn" onClick={restart}>Restart</button>
        <button className="resetBtn" onClick={() => {
            setCycles([]);
            setIsInputting(true);
            restart();
            }}>Reset</button>
        </footer>
    );
}

export default AlgorithmFooter;