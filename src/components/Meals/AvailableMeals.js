import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Chicken Don',
      description: 'Finest chinese style cokked chicken',
      price: 190,
    },
    {
      id: 'm2',
      name: 'Schezwan Egg Fried Rice',
      description: 'A chinese fried rice!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Chicken Biryani',
      description: 'Indian Speacial Rice and Chicken dish submerged under variety of spices',
      price: 220,
    },
    {
      id: 'm4',
      name: 'Sweet and Salt soda',
      description: 'Healthy...soda drink...',
      price: 60,
    },
  ];

  const AvailableMeals = () =>
  {
    const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);
    return <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>  
        </Card>
    </section>
  }
  export default AvailableMeals;