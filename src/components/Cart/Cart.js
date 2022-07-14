import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);


  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button
            onClick={props.removeItem}
            style={{
              float: "right",
              marginRight: "200px",
              backgroundColor: "#8a2b06",
              border: "none",
              borderRadius: "3px",
              color: "white",
              fontWeight: "bold",
              fontSize: "large",
            }}
          >
            -
          </button>
          <div
            style={{ float: "right", fontWeight: "bold", paddingRight: "50px" }}
          >
            {item.amount}
          </div>
        </li>
      ))}
    </ul>
  );

  const totalAmount = cartCtx.items.reduce((accumulator, curItem) => {
    return accumulator + curItem.amount * curItem.price;
  }, 0);

  return (
    <Modal onClose={props.onClose}>
      {cartItems}

      <div>
        <span className={classes.total}>
          {totalAmount === 0 ? "Cart is Empty" : "Total Amount"}
        </span>
        <span className={classes.totalAmount}>
          {totalAmount == 0 ? "" : `$${totalAmount.toFixed(2)}`}
        </span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          {" "}
          Close{" "}
        </button>
        <button className={classes.button}> Order </button>
      </div>
    </Modal>
  );
};

export default Cart;