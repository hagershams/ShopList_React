import React from "react";
import ItemForm from "./ItemForm";
import ChrinkedForm from "./ChrinkedForm";

const InitialForm =(props)=>{
    const ToFormHandle=()=>{
        return (<ItemForm onSave={props.onSave}/>);
    };


    return ( <ChrinkedForm onchange={ToFormHandle}/>);
}
export default InitialForm;