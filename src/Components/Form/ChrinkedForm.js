import React from "react";
import './ItemForm.css' ;

const ChrinkedForm =(props)=>{
    const ToForm =(event)=>{
        event.preventDefault();
        props.change();
    }
    return (
        <form onSubmit={ToForm} >{/*onClick={ToForm} onClick={Do} Could be Div instead of Form .. OnSubmit could be OnClick*/}
            <button className="CenterButton" type="submit" > Add Item </button>
        </form>
    );
}
export default ChrinkedForm;