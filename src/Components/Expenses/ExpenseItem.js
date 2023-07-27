import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
const ExpenseItem=(props)=> {
  // const [title, setTitle] = useState(props.title);
  // const clickHandler=()=>{
  //   setTitle("upd");
  //   console.log(title);
  // };
  
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description" >
        <h2 >{props.title}</h2>
        <div className="expense-item__price" >$ {props.amount}</div>
        {/* <button onClick={clickHandler}>cilck me</button> */}
      </div>
    </Card>
    </li>
  );
}
export default ExpenseItem;
