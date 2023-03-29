import { createSlice } from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name : 'cart',

    initialState : {
        items: ["Apple", "Mango"],
    },

    reducer: {  //reducer() does not return anything, It just take a state and modify it

        addItem: (state, action) => {   // in this state is current state and here add button will call the reducer() to modify the cartSlice
            state.action.push(action.payload); //Here we write the logic.here state is modify 
        },

        removeItem: (state, action) =>{ //This action is baically action which we dispatch from component
            state.items.pop();
        },

        clearCart: (state) =>{ //Each reducer have action and reducer name, here name of reducer is clearCart, action is whole reducer function function
            state.items = [];  //Here we do not need action.payload becoz here we not send anything, here we just clear the cart
        },

    }

})


export const {addItem, removeItem, clearCart} = cartSlice.actions; // here we eport actions here syntax is changed

export default cartSlice.reducer; // It will combine all the reducers and make it one reducer and export it