import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {
  const [amount , letAmount] = useState(props.amount)
  const clickHandler = () =>
  {
    letAmount('100')
    console.log('Deleted...')
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <h2>{amount}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>Expense</button>
    </Card>
  );
}

export default ExpenseItem;