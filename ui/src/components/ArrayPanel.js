const ArrayPanel = (props) => {
    const {outputArr, currentStep} = props;
    return (
        <div>
        {outputArr.map((element, index) => {
            return (
                <div key={index} className={index === currentStep || index === currentStep + 1 ? "highlighted" : ""}>
                    {element}
                </div>
            );
        })}
        </div>
    );
}

export default ArrayPanel;