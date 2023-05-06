import React , {useState} from 'react';
import Card from '../MainCard/Card';
import Component1 from '../Item/Component1';
import './LargeComponent.css';
import ChoseYear from '../YearFilterComponent/Filter';
function LargeComponent(props){
    const DataItems = props.items;
    const [chosenYear,setChosenYear] =useState(); //for setting and changing year
    const [items,setitems]= useState(DataItems); //for setting Data after filteration

    const FilterHandle =(SelectedYear)=> {
        setChosenYear(SelectedYear);
        const FilteredItems = [...DataItems.filter((item)=>
            item.date.getFullYear()== SelectedYear)];
        setitems(FilteredItems);
        /*Reciving a chosen year (target.value) ... and ...  Setting it as current year in the component itself (shown drop down)*/
    };
    return(
        <Card className="LargeComponent">
            <ChoseYear onChangeYear={FilterHandle} /*onFilter={ApplyFilter}*/ send={chosenYear}/>
            <div> {items.map( (item)=> 
                (<Component1 
                key = {item.id}
                date = {item.date}
                title = {item.title}
                price = {item.price}/>))}
            </div>
        </Card>
    );
}
export default LargeComponent;