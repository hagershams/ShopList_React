import './DateComponent.css';
const DateComponent =(props)=> {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US' , {month: 'long'});
    const day = props.date.toLocaleString('en-US' , {day: '2-digit' });
    return (
        <div className="fullDate">
            <div className="day">{day}</div>
            <div className="month">{month}</div>
            <div className="year">{year}</div> 
        </div>
    );
}
export default DateComponent;