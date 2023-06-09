import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
// import { clearCart } from "../utils/CartSlice";
const clearCart = require("../utils/CartSlice").clearCart;

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items); // Here i subscribe slice or part of the store

  const dispatch = useDispatch();
 
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div className="font-bold flex text-3xl justify-center my-4 ">Total added Items - {cartItems.length}     <button
          className="clear-btn" onClick={() => handleClearCart()} >
          Clear Cart
        </button> </div>
  
        <div className="flex gap-4 flex-wrap  justify-center p-2 cart-body">
        {cartItems.map(item => <FoodItem  {...item.info} />)}
        </div>
      
      
    </div>
  );
};

export default Cart;
