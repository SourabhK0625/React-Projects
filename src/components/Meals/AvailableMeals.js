import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
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
      price: 180,
    },
    {
      id: 'm3',
      name: 'Chicken Biryani',
      description: 'Indian Special Rice and Chicken dish submerged under variety of spices',
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
    const mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} 
      name={meal.name} 
      description={meal.description} 
      price={meal.price}/>
      );
    return <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>  
        </Card>
    </section>
  }
  export default AvailableMeals;