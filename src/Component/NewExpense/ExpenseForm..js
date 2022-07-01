import React,{useState} from "react";
import './ExpenseForm.css';
const ExpenseForm = () =>
{
    const [enteredTitle , setEnteredTitle] = useState('')
    const [enteredAmount , setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    // const [userInput , setUserInput] = useState(
    //     {
    //         enteredTitle : '',
    //         enteredAmount : '',
    //         enteredDate : ''
    //     }
    // )
    const submitHandler = (event) =>
    {
        event.preventDefault();
        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }
        console.log(expenseData)
    }
    const titleChangeHandler = (event) =>
    {
        setEnteredTitle(event.target.value);
        // setUserInput(
        //     {
        //         ...userInput , 
        //         enteredTitle : event.target.value,
        //     }
        // );
    }
    const amountChangeHandler = (event) =>
    {
        setEnteredAmount(event.target.value);
        // setUserInput(
        //     {
        //         ...userInput , 
        //         enteredAmount : event.target.value,
        //     }
        // );
    }
    const dateChangeHandler = (event) =>
    {
        setEnteredDate(event.target.value);
        // setUserInput(
        //     {
        //         ...userInput , 
        //         enteredDate : event.target.value,
        //     }
        // );
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control" onChange={titleChangeHandler}>
                    <label>Title</label>
                    <input type='text'></input> 
                </div>

                <div className="new-expense__control" onChange={amountChangeHandler}>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01"></input> 
                </div>

                <div className="new-expense__control" onChange={dateChangeHandler}>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31"></input> 
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};
export default ExpenseForm;