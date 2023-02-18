import { configureStore } from "@reduxjs/toolkit";
import { userAuthReducer } from "./slices/userAuth";
import {contactsReducer} from './slices/contacts';

export const store = configureStore({
    reducer: {
        userAuth: userAuthReducer,
        contacts: contactsReducer
        // products: productsRESHALA
    }
});