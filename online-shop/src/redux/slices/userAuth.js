import {createSlice, createSelector } from '@reduxjs/toolkit';


const startState = {
    name: '',
    isAuth: true
};


export const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState: startState,
    reducers: {
        login: (state) => {
            state.name = "john";
            state.isAuth = true;
        },
        logout: (state) => {
            state.name = 'Plis name'
            state.isAuth = false;
        }
    }
});


export const userAuthReducer = userAuthSlice.reducer;

export const {login, logout} = userAuthSlice.actions;

export const selectUserAuth = ({userAuth}) => userAuth;

export const selectIsAuth = createSelector(
    selectUserAuth,
    ({isAuth}) => isAuth
);

export const selectName = createSelector(
    selectUserAuth,
    ({name}) => name
);




// const action = {
//     type: 'logout'
// }

// const initialState = {
//     a:2,
//     goods: [{},{}],
//     isAuth: false
// };

// export const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'login':
//             return poreshajSLoginom()
//             // return {
//             //     ...state,
//             //     isAuth: true
//             // };
//         case 'logout': 
//             return poreshajSLogoutom();
//             // return {
//             //     ...state,
//             //     isAuth: false
//             // }
//         default:
//             return state;
//     }
// }

// function poreshajSLoginom() {
//     ////
// }

// function poreshajSLogoutom() {
//     ////
// }