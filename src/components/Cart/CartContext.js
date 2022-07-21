import React from "react";

const CartContext = React.createContext(
    {
        items:[],
        isLoggedIn: false,
        addToken: (item)=>{},
        removeToken: (id)=> {}
    }
);

export default CartContext;