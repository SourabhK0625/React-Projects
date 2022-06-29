import './ExpenseItem.css';
function ExpenseDetails(props)
{
    return (
    <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div>
            <h3 className='expense-item__price'> Rs {props.amount}</h3>
            <h3 className='expense-item__location'>Location: {props.location}</h3>
        </div>
          
    </div>
    )
    
};
export default ExpenseDetails;