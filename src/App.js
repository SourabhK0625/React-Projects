import ExpenseItem from "./Component/Expense/ExpenseItem";
function App() 
{
  const details = 
  [
    {title : "Food" , amount : "80" , date : new Date(2022, 5 ,2) , location : "KLE Tech"},
    {title : "Travel" , amount : "8000" , date : new Date(2022, 5 ,12), location : "Kerala"},
    {title : "Food" , amount : "300" , date : new Date(2022, 5 ,20), location : "Panjurli"},
    {title : "Food" , amount : "50" , date : new Date(2022, 5 ,22), location : "Dharwad"}
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      {
        details.map(item =>{
          return (
          
            <ExpenseItem title = {item.title} 
                     date = {item.date}
                     amount = {item.amount}
                     location = {item.location}></ExpenseItem>
        
        )})
        
      }      
    </div>
  );
}

export default App;
