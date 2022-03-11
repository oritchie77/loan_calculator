import './Input.scss'

const Input = (props) => {

    const handelChange = max => event => {
        props.onChangeValue(event);
    }
    return (
        <div className={'input'}>
            <input
                type={props.type}
                id={props.Id}
                value={props.value}
                onChange={handelChange()}
            />
        </div>
    )
}

export default Input