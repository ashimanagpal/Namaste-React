import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";


const store = configureStore({
    //in this we will import slice whcih we created
    reducer: {
        cart : CartSlice,
    },
});

export default store;





//Revision
/* 
* createstore
*   -configureStore - RTK()
*
*
* Provide my store to app
*   <Provider store = {store}> - import from react-redux
*
* createSlice
*   -RTK - createSlice({
    name: "" ,
    initialState: "",
    reducers: {
        here we write actions and their corsenponding reducer function Like:

        addItem: (state, action) => {
            this function does not return anything , here we directly update the state:

            state= action.payload}
            }
})


export const{addItem} = cartslice.actions;
export default cartSlice.reducer;
*
*   put that slice into store
*       {
            reducer:{
                cart: cartSlice,
                user: userSlice,
            }
        }
*
*
*
*/

