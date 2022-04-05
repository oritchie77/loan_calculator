
import './CalcInput.scss'
import Input from "../Input/Input";
import Slider from "../Slider/Slider";

const CalcInput = (props) => {


     return (
        <div className={'calc-Input'}>

            <p>What is your annual income</p>
            <Input
                type={'number'}
                Id={'salary'}
                value={props.salaryValue}
                onChangeValue={props.onChangeSalaryInput}
                lable={'£'}
            />

            <p>How much can you contribute each month</p>

            <Slider
                sliderId={'contributionAmount'}
                min={props.minContribution}
                max={props.maxContribution}
                defaultLenght={props.setContributionSliderValue}
                value={props.contributionSliderValue}
                onChangeValue={props.onChangeContributionSlider}
            />
            <p>How much do you want to borrow?</p>
            <Slider
                sliderId={'borrowAmount'}
                min={1}
                max={10000}
                defaultLenght={props.setBorrowSliderValue}
                value={props.borrowSliderValue}
                onChangeValue={props.onChangeBorrowSlider}
            />
            {/*<CalcButton />*/}
        </div>
    )
}

export default CalcInput