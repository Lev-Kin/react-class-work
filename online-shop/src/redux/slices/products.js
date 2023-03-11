import {createSlice, createSelector} from '@reduxjs/toolkit';



const startState = {
    goods: null,
    isLoading: false,
    error: null
};

export const productsSlice = createSlice({
    name: 'products',
    initialState: startState,
    reducers: {
        setProducts: (state, {payload}) => {
            state.goods = payload;
            state.error = null;
            state.isLoading = false;
        },
        setIsLoading: (state, {payload}) => {
            state.isLoading = payload;
        },
        setError: (state, {payload}) => {
            state.error = payload;
            state.products = null;
            state.isLoading = false;
        }
    }
});


export const productsReducer = productsSlice.reducer;

export const {setProducts, setIsLoading, setError} = productsSlice.actions;

export const selectProducts = ({products}) => products;

export const selectGoods = createSelector(
    selectProducts,
    ({goods}) => goods
);

export const selectIsLoading = createSelector(
    selectProducts,
    ({isLoading}) => isLoading 
);

export const selectError = createSelector(
    selectProducts,
    ({error}) => error 
);
