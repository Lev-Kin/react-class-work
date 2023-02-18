import {createSlice} from '@reduxjs/toolkit';


const startState = {
    isAuth: true,
};

export const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState: startState,
    reducers: {
        login: (state) => {
            state.isAuth = true;
        },
        logout: (state) => {
            state.isAuth = false;
        }
    }
});


export const userAuthReducer = userAuthSlice.reducer;

export const {login, logout} = userAuthSlice.actions;



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