import {createSlice, createSelector} from '@reduxjs/toolkit';


const startState = {
    user: false,
};

export const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState: startState,
    reducers: {
        setUser: (state, payload) => {
           state.user = payload;
        },
        logout: (state) => {
            state.name = 'Please log in';
            state.isAuth = false;
        }
    }
});


export const userAuthReducer = userAuthSlice.reducer;

export const {setUser, logout} = userAuthSlice.actions;

export const selectUserAuth = ({userAuth}) => userAuth;

export const selectIsAuth = createSelector(
    selectUserAuth,
    ({user}) => Boolean(user)
);

export const selectName = createSelector(
    selectUserAuth,
    ({user}) => user ? user.displayName : ''
);