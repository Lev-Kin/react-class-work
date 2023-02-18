import {createSlice, createSelector} from '@reduxjs/toolkit';


const startState = {
    city: 'Gomel',
    phone: '+375 44 1234567',
    street: 'Sovetskaya 20'
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: startState,
    reducers: {
       changeCity: (state, {payload}) => {
            state.city = payload;
       }
    }
});


export const contactsReducer = contactsSlice.reducer;

export const {changeCity} = contactsSlice.actions;

export const selectContacts = ({contacts}) => contacts;

export const selectAdress = createSelector(
    selectContacts,
    ({street, city}) => ({street, city})
);

export const selectPhone = createSelector(
    selectContacts,
    ({phone}) => phone
);

