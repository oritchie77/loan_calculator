

const ContributionSlider = (props) => {

    const contributionHandelChange = (max) => (event) => {
        props.onContribuitionChangeValue(event);
    }

    return (
        <div className={'slider-container'}>
            <div className={'slider-value-row'}>
                <input type="range"
                       min={props.min}
                       max={props.max}
                       className="slider"
                       id={props.sliderId}
                       value={props.value}
                       onChange={contributionHandelChange()}
                />
                <span className={'slider-value'}>£{props.value}</span>
            </div>
            <div className={'slider-min-max'}>
                <p>Min: £{props.min}</p>
                <p>Max: £{props.max}</p>
            </div>
        </div>
    )

}

export default ContributionSlider