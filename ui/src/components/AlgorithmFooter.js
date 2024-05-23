const AlgorithmFooter = (props) => {
    const {setCurrentCycle, setCurrentStep, setCycles, setIsInputting} = props;

    const restart = () => {
        setCurrentCycle(0);
        setCurrentStep(0);
    }
    return (
        <footer className="algorithmFooter">
        <button className="restartBtn" onClick={restart}>Restart</button>
        <button className="resetBtn" onClick={() => {
            setCycles([]);
            setIsInputting(true);
            }}>Reset</button>
        </footer>
    );
}

export default AlgorithmFooter;