import AlgorithmFooter from "./AlgorithmFooter";
import '../assets/styles/AlgorithmPanel.css';

const AlgorithmPanel = (props) => {
    const {steps, currentStep, setSteps} = props;
    return (
        <div className="algorithmPanel">
            <h1>Algorithm Panel</h1>
            <AlgorithmFooter />
        </div>
    )
}

export default AlgorithmPanel;