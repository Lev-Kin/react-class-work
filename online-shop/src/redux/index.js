import { configureStore } from "@reduxjs/toolkit";
import { userAuthReducer } from "./slices/userAuth";
import { contactsReducer } from './slices/contacts';
import { productsReducer } from './slices/products';

export const store = configureStore({
    reducer: {
        userAuth: userAuthReducer,
        contacts: contactsReducer,
        products: productsReducer
    }
});