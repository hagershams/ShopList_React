import React from "react";
import './Filter.css';
const ChoseYear = (props) => {
    const HandleChange = (event)=>{
        props.onChangeYear(event.target.value);
        //props.onFilter();
        }
    return (
        <div className="FilterCard">
            <div className="Filter">
                <label>Filter By Year</label>
                <select onChange={HandleChange} value={props.send}>
                    <option value='2019' >2019</option>
                    <option value='2020' >2020</option>
                    <option value='2021' >2021</option>
                    <option value='2022' >2022</option>
                </select>
            </div>
        </div>
    );
};
export default ChoseYear;