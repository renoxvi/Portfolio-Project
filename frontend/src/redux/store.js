import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { productReducer } from "./reducers/product";
import { sellerReducer } from "./reducers/seller";/*
*/
import { eventReducer } from "./reducers/event";
import { cartReducer } from "./reducers/cart";
import { wishlistReducer } from "./reducers/wishlist";
import { orderReducer } from "./reducers/order";


const Store = configureStore({
  reducer: {
   user: userReducer,
   products: productReducer, 
    seller: sellerReducer,
    
    events: eventReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    order: orderReducer,/**/
  },
});

export default Store;
