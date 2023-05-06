import React, { useState } from 'react';
import LargComponent from './Components/ItemsCollection/LargeComponent';
import SaveNewItem from './Components/Form/SaveNewItem';
//import InitialForm from './Components/Form/InitialForm';
//import {chosenYear} from './Components/ItemsCollection/LargeComponent';
const DataItems = [
  { id : 'e1' ,
    date : new Date (2020,2,26) ,
    title : 'Oven' ,
    price : 150 },

  { id : 'e2' ,
    date : new Date (2021,4,15) ,
    title : 'Hand Blender' ,
    price : 45},

  { id : 'e3' ,
    date : new Date (2019,6,8) ,
    title : 'Fridge' ,
    price : 500 },

  { id : 'e4' ,
    date : new Date (2022,11,14) ,
    title : 'Fan' ,
    price : 70},

  { id : 'e5',
    date : new Date (2022,9,7) ,
    title : 'Microwave' ,
    price : 200}
  ];
function App() {
  const [items, setitems] = useState(DataItems); //for setting Data will always be used
  const SavingItemHandler =(Data)=> {
    setitems((prevItems)=> {
      return ([Data, ...prevItems]);
    });
  };
  return (
    <div>
      <h2> Hello Shamousa Let's Goo </h2>
      <SaveNewItem onSave={SavingItemHandler} />
      <LargComponent items = {items}></LargComponent>
    </div>
  );
}
export default App;
