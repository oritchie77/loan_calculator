import CalcInput from "../CalcInput/CalcInput";
import CalcOutput from "../CalcOutput/CalcOutput";
import './Main.scss'
import {useEffect, useState} from "react";



const Main = () => {

    const [borrowSliderValue, setBorrowSliderValue] = useState(2000)
    const onChangeBorrowSlider = event => {
        setBorrowSliderValue(parseInt(event.target.value, 10));
    }

    const [contributionSliderValue, setContributionSliderValue] = useState(10)
    const onChangeContributionSlider = event => {
        setContributionSliderValue(parseInt(event.target.value, 10));
    }

    const [salaryValue, setSalaryValue] = useState(25000)
    const onChangeSalaryInput = event => {
        setSalaryValue(parseInt(event.target.value, 10));
    }

    const [maxContribution, setMaxContribution] = useState(1)
    const [minContribution, setMinContribution] = useState(1)



    useEffect(() => {
        const minMonthlyContribution = () => {
            return parseInt(salaryValue / 12 * 0.1)
        }

        const maxMonthlyContribution = () => {
            return parseInt(salaryValue / 12)
        }
            setMinContribution(minMonthlyContribution())
        setMaxContribution(maxMonthlyContribution())
        setContributionSliderValue(minMonthlyContribution())
    }, [salaryValue])

    return (
        <main>
            <CalcInput
                borrowSliderValue={borrowSliderValue}
                setBorrowSliderValue={setBorrowSliderValue}
                onChangeBorrowSlider={onChangeBorrowSlider}

                contributionSliderValue={contributionSliderValue}
                setContributionSliderValue={setContributionSliderValue}
                onChangeContributionSlider={onChangeContributionSlider}
                minContribution={minContribution}
                maxContribution={maxContribution}

                salaryValue={salaryValue}
                setSalaryValue={setSalaryValue}
                onChangeSalaryInput={onChangeSalaryInput}
            />
            <CalcOutput
                borrowAmount={borrowSliderValue}
                contributionAmount={contributionSliderValue}
                salaryAmount={salaryValue}
            />
        </main>
    )
}

export default Main