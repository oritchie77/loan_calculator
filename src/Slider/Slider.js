import './Slider.scss'

const Slider = (props) => {

const handelChange = max => event => {
    props.onChangeValue(event);
}

    return (
        <div className={'slider-container'}>
            <input type="range"
                   min={props.min}
                   max={props.max}
                   className="slider"
                   id={props.sliderId}
                   value={props.value}
                   onChange={handelChange()}
            />
            <span className={'slider-value'}>£{props.value}</span>
            <div className={'slider-min-max'}>
                <p>£{props.min}</p>
                <p>£{props.max}</p>
            </div>
        </div>
    )

}

export default Slider