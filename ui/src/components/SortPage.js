import React, { useState } from 'react';
import AlgorithmPanel from "./AlgorithmPanel";
import AlgorithmSection from "./AlgorithmSection";

const SortPage = ({stepString, sort}) => {
    const [cycles, setCycles] = useState([]);
    const [currentCycle, setCurrentCycle] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const [step, setStep] = useState(0);
    const [inputArr, setInputArr] = useState([]);
    const [outputArr, setOutputArr] = useState([]);
    const [isInputting, setIsInputting] = useState(true);

    const nextStep = () => {
        if (cycles[currentCycle].cycle.length === 0) {
            // Broke early because the array is already sorted
            return;
        }

        if (currentCycle === cycles.length - 1 && currentStep === cycles[currentCycle].cycle.length - 1) {
            // The last step in the last cycle
            return;
        }

        // Perform the step
        setStep(cycles[currentCycle].cycle[currentStep]);
        performStep();

        // If the currentStep is not the last step in the currentCycle
        if (currentStep < cycles[currentCycle].cycle.length - 1) {
            console.log("Incrementing step");
            setCurrentStep(currentStep + 1);
        // If the currentStep is the last step in the currentCycle
        } else {
            // If the currentCycle is not the last cycle
            if (currentCycle < cycles.length - 1) {
                console.log("Incrementing cycle")
                setCurrentCycle(currentCycle + 1);
                setCurrentStep(0);
            }
        }
    }

    const prevStep = () => {
        // If it's the first step in the first cycle, do nothing
        if (currentCycle === 0 && currentStep === 0) {
            return;
        }

        // If it's the last step in the last cycle
        if (currentCycle === cycles.length - 1 && currentStep === cycles[currentCycle].cycle.length - 1) {
            console.log("a");
            setStep(cycles[currentCycle].cycle[currentStep]);
            performStep();
            setCurrentStep(currentStep - 1);
            return;
        }

        // If the currentStep is not the first step in the currentCycle
        if (currentStep > 0) {
            console.log("b");
            setStep(cycles[currentCycle].cycle[currentStep - 1]);
            performStep();
            setCurrentStep(currentStep - 1);
        } else {
        // If the currentStep is the first step in the currentCycle
            console.log("c");
            setStep(cycles[currentCycle - 1].cycle[currentCycle - 1]);
            performStep();
            setCurrentCycle(currentCycle - 1);
            setCurrentStep(cycles[currentCycle - 1].cycle.length - 1);
        }
    }

    const performStep = () => {
        if (step.swapped) {
            const newOutputArr = [...outputArr];
            const [index1, index2] = step.compared[0];
            [newOutputArr[index1], newOutputArr[index2]] = [newOutputArr[index2], newOutputArr[index1]];
            setOutputArr(newOutputArr);
        }
    }

    return (
        <div className="mainPanel">
            <AlgorithmPanel 
            cycles={cycles}
            currentStep={currentStep}
            currentCycle={currentCycle}
            setCycles={setCycles}
            setCurrentCycle={setCurrentCycle}
            setCurrentStep={setCurrentStep}
            inputArr={inputArr}
            setInputArr={setInputArr}
            isInputting={isInputting}
            setIsInputting={setIsInputting}
            outputArr={outputArr}
            setOutputArr={setOutputArr}
            sort={sort}
            />
            <AlgorithmSection 
            cycles={cycles}
            currentCycle={currentCycle}
            currentStep={currentStep}
            nextStep={nextStep}
            prevStep={prevStep}
            stepString={stepString}
            />
        </div>
    );
}

export default SortPage;