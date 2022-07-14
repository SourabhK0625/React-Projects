import { useState,useContext } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import CartContext from '../../../store/cart-context';

const MealItemForm = (props) => {
    const CartCtx = useContext(CartContext);
    

   
    const formSubmitHandler = (event)=>{
        event.preventDefault();
        CartCtx.addItem({...props.itemList,amount:Number(event.target[0].value)});
        

    }
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type='submit'>+ Add</button>
    </form>
  );
};

export default MealItemForm;