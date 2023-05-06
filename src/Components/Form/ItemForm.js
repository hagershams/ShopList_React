import React, { useState } from 'react';
import './ItemForm.css';
const ItemForm =(props)=> {
    const [OldTitle,NewTitle] = useState('');
    const [OldPrice,NewPrice] = useState('');
    const [OldDate,NewDate] = useState('');
    const OnChangeTitleHandler =(event)=> {
        NewTitle(event.target.value);}
    const OnChangePriceHandler =(event)=> {
        NewPrice(event.target.value);}
    const OnChangeDateHandler =(event)=> {
        NewDate(event.target.value);}
//Above : Accepted All Data Entered is DONE
    const OnSubmitHandler =(event)=> {
        event.preventDefault();
        const NewData = {
            title: OldTitle,
            price: OldPrice,
            date: new Date(OldDate),};
        props.OnSaveData(NewData);
        NewTitle('');
        NewPrice('');
        NewDate('');
    };
    const cancel =(event)=>{
        props.cancel();
    }
    return (
        <form onSubmit={OnSubmitHandler} >
            <h2>Add Item!</h2>
            <div className="New">
                <label>Title is :</label>
                <input type='text'  value={OldTitle} onChange={OnChangeTitleHandler}/>
            </div>
            <div className="New">
                <label>Price is :</label>
                <input type='number' min='5' step='0.1' value={OldPrice} onChange={OnChangePriceHandler} />
            </div>
            <div className="New">
                <label>Date is :</label>
                <input type='date' min='2019-01-01' max ='2023-12-31' value={OldDate} onChange={OnChangeDateHandler}/>
            </div>
            <div>
                <button className="AddButton" type="submit" >Add Item</button>
                <button className="CancelButton" type="button" onClick={cancel}>Cancel</button>
            </div>
        </form>
    )
}
export default ItemForm;