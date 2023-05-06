import React , {useState} from 'react';
import Card from '../MainCard/Card';
import DateComponent from './DateComponent';
import './Component1.css';

function Component1(props) {
    const [ title , setTitle ] = useState (props.title);
    const DoubleClickHandler =()=> {
        setTitle('New Title');
    }
    return (
        <Card className='full'>
            <DateComponent date={props.date}/>
            <div className='itemDescription'>
                <h2>{title}</h2> 
                <div className='pricestyle'>${props.price}</div>
                <button className='buttonstyle' onDoubleClickCapture={DoubleClickHandler}>Click to Change Title</button>
            </div>
        </Card>
    );
}
export default Component1;