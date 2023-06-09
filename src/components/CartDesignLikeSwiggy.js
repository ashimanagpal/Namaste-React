import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  //const store = useSelector((store) => store);   // Here i suscribe the store, which is wrong

  const cartItems = useSelector((store) => store.cart.items); // Here i subscribe slice or part of the store
  const [cartdish,  setCartDish] = useState();

  useEffect(() => {
    getSelectedItems();
  }, []); 

  async function getSelectedItems(){
    const data = await fetch("https://www.swiggy.com/dapi/cart");
    const jsondish = await data.json();
    console.log(jsondish.data);
    setCartDish(jsondish.data);
  }


  return (
    <div className="cart-page">
      <div className="font-bold text-3xl">Cart Items - {cartItems.length}</div>
      <div className="selected-items">
        <div className="cart-added">
          <button className="added-header">
            <span className="added-header-left">
              <img height="50" width="50" alt="" src="" />
            </span>
            <span className="added-header-right">
              <h3>Katani Dhaba (VIP Road)</h3>
              <h4>VIP Road</h4>
            </span>
          </button>
          <div className="added-items">
                    <div className="dish-quantity">
                      <div className="veg-dish">
                        <i
                        ></i>
                        <div className="dish">Veg Fried Rice</div>
                      </div>
                          <div className="quantity">
                            <div>1</div>
                          </div>
                          <div className="rupee">
                            <span>180</span>
                          </div>
                    </div>
                    <div className="dish-quantity">
                      <div className="veg-dish">
                        <i
                        ></i>
                        <div className="dish">Veg Fried Rice</div>
                      </div>
                          <div className="quantity">
                            <div>1</div>
                          </div>
                          <div className="rupee">
                            <span>180</span>
                          </div>
                    </div>
          </div>
          <div className="total">
            <div>TO PAY</div>
            <div>434</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
