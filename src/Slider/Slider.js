import './Slider.scss'

const Slider = (props) => {

const handelChange = max => event => {
    props.onChangeValue(event);
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
                       onChange={handelChange()}
                />
                <span className={'slider-value'}>£{props.value.toLocaleString('en')}</span>
            </div>
            <div className={'slider-min-max'}>
                <p>Min: £{props.min.toLocaleString('en')}</p>
                <p>Max: £{props.max.toLocaleString('en')}</p>
            </div>
        </div>
    )

}

export default Slider