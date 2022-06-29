import './ExpenseItem.css';
function ExpenseItem(props){
    // const expenseDate = new Date()
    // const expenseTitle = 'Expense Item'
    // const expenseAmount1 = 10 
    // const LocationOfExpenditure = 'Desi Tadka Hubli'
    return(
      <div  className="expense-item">
        <div>{props.date.toString()}</div>

        <div className="expense-item__description">
          <h2>{props.title}</h2>

          <div>
            <h3 className='expense-item__price'> Rs {props.amount}</h3>
            <h3 className='expense-item__location'>Location: {props.location}</h3>
          </div>
          
        </div>
      </div>
  );
}
  export default ExpenseItem;