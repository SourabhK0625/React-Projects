import { useState } from "react";
import CartContext from "./CartContext";
const CartProvider = props =>
{
    let [isToken, setIsToken] = useState('');

    const userIsLoggedIn = !!isToken;
    const addTokenHandler= (item)=>
    {
        setIsToken([...isToken , item])
    };

    const removeTokenHandler = (item)=>
    {
       setIsToken([]);
    };
    const cartContext = 
    {
        tokens:isToken,
        isLoggedIn: userIsLoggedIn,
        addToken: addTokenHandler,
        removeToken: removeTokenHandler
    };
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );

};

export default CartProvider;