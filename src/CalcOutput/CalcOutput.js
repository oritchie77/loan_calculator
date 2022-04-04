import './CalcIOutput.scss'

const CalcOutput = (props) => {

    const numberOfMonths = () => {
       return props.borrowAmount / props.contributionAmount
    }

    let months = numberOfMonths()

    const lastMonthPayment = () => {
        let fullMonthPayments = props.contributionAmount * parseInt(months)
        return props.borrowAmount - fullMonthPayments
    }

    const calcNumberOfMonthsInt = () => {
        if(months < parseInt(months)) {
            return parseInt(months) + 1
        } else {
            return parseInt(months)
        }
    }

    let monthsInt = calcNumberOfMonthsInt()

    const loanDurationinYears = () => {
        let monthsAfterYears  = monthsInt % 12
        let years = monthsInt / 12 | 0
        return years +  ' Years ' + monthsAfterYears + ' Months'

    }

    return (
    <div className={'calc-output'}>
        <p>Loan amount:</p>
        <p className={'value'}>£{props.borrowAmount.toLocaleString('en')}</p>
        <p>Monthly Contribution:</p>
        <p className={'value'}>£{props.contributionAmount.toLocaleString('en')}</p>
        <p>Loan Duration:</p>
        <p className={'value'}>{loanDurationinYears()}</p>
        <p>last Month Payment:</p>
        <p className={'value'}>£{lastMonthPayment().toLocaleString('en')}</p>
    </div>
    )
}

export default CalcOutput