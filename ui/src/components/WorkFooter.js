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
