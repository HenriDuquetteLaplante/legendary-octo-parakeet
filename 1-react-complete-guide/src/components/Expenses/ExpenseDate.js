import "./ExpenseDate.css";
function ExpenseDate(props) {
    const date = new Intl.DateTimeFormat('en-US', {weekday: "short", month: "short", year: "2-digit"}).format(props.date)

    return (
        <div className="expense-date">
            <div className="expense-date__day">{date}</div>
        </div>
    );
}

export default ExpenseDate;