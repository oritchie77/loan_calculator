const ContributionSlider = (props) => {

    const contributionHandelChange = max => event => {
        props.onContribuitionChangeValue(event);
    }

    return (
        <div className={'slider-container'}>
            <input type="range"
                   min={props.min}
                   max={props.max}
                   className="slider"
                   id={props.sliderId}
                   value={props.value}
                   onChange={contributionHandelChange()}
            />
            <span className={'slider-value'}>£{props.value}</span>
            <div className={'slider-min-max'}>
                <p>£{props.min}</p>
                <p>£{props.max}</p>
            </div>
        </div>
    )

}

export default ContributionSlider