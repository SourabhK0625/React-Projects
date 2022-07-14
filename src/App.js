import { useState } from 'react';
import CartProvider from './store/CartProvider';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import AvailableMeals from './components/Meals/AvailableMeals';
import Cart from './components/Cart/Cart';


function App() {
  const [showCart, setShowCart] = useState(false)

const showCartHandler = ()=>{
  
    setShowCart(true)

}
const hideCartHandler = ()=>{
  setShowCart(false)

}
const removeItem = (item,id)=>{
  console.log('Nothing is impossible')
}

  return (
    <CartProvider>
      {showCart && <Cart onClose = {hideCartHandler} ></Cart>}
      <Header onCartClick={showCartHandler} />
      <Meals/>
      <AvailableMeals />
      
    </CartProvider>
  );
}

export default App;