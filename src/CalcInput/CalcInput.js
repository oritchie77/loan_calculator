
import CalcButton from "../CalcButton/CalcButton";
import './CalcInput.scss'
import Input from "../Input/Input";
import Slider from "../Slider/Slider";
import ContributionSlider from "../ContributionSlider/ContributionSlider";

const CalcInput = (props) => {


     return (
        <div className={'calc-Input'}>

            <p>What is your annual income</p>
            <Input
                type={'number'}
                Id={'salary'}
                value={props.salaryValue}
                onChangeValue={props.onChangeSalaryInput}
            />

            <p>How much can you contribute each month</p>

            <ContributionSlider
                sliderId={'contributionAmount'}
                min={1}
                max={500}
                defaultLenght={props.setContributionSliderValue}
                value={props.contributionSliderValue}
                onContribuitionChangeValue={props.onChangeContributionSlider}
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