import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";


const store = configureStore({
    //in this we will import slice whcih we created
    reducer: {
        cart : CartSlice,
    },
});

export default store;
