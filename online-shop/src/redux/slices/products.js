import {createSlice, createSelector, createAsyncThunk, bindActionCreators} from '@reduxjs/toolkit';
import { fetchProducts } from '../../utils/fetchProducts';


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
        },
        setIsLoading: (state, {payload}) => {
            state.isLoading = payload;
        },
        setError: (state, {payload}) => {
            state.error = payload;
            state.products = null;
        }
    }
});



export const productsReducer = productsSlice.reducer;

export const {setProducts, setIsLoading, setError} = productsSlice.actions;
console.log(productsSlice);
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
