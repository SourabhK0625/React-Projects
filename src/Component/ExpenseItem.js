import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props)
{
    
    return(
      <div  className="expense-item">
        <ExpenseDate date = {props.date} />
        <div className="expense-item__description">
          <ExpenseDetails title = {props.title} amount= {props.amount} location = {props.location} />
        </div>
      </div>
  );
}
export default ExpenseItem;