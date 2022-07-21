import { useState } from "react";
import CartContext from "./CartContext";
const CartProvider = props =>
{
    let [isToken, setIsToken] = useState(null);

    const userIsLoggedIn = !!isToken;
    const addTokenHandler= (item)=>
    {
        setIsToken(item)
    };

    const removeTokenHandler = ()=>
    {
       setIsToken(null);
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