import React , {useState} from "react";
import ChrinkedForm from "./ChrinkedForm";
import './SaveNewItem.css';
import ItemForm from "./ItemForm";
const SaveNewItem =(props)=> {
    const [hh,sethh]=useState(1);
    const SaveDataHandler =(InputNewData)=> {
        const AddData = {
            ...InputNewData,
            id: Math.random().toString()};
        console.log(AddData);
        props.onSave(AddData);
    };
    const ToFormHandle=()=>{
        sethh(hh*2);
    }
    const cancelHandler =()=>{
        sethh(1);
    };
    let output = <ChrinkedForm change={ToFormHandle}/>;
    if (hh > 1){output = <ItemForm OnSaveData={SaveDataHandler} cancel ={cancelHandler}/>}
    return(
    <div className="newItem" >{output}</div>
    );
}

export default SaveNewItem;