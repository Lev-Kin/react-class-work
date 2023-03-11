import {loginWithGoogle} from '../../firebase';
import {setUser} from '../slices/userAuth';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const googleLogin = createAsyncThunk(
    'userAuth/googleLogin',
    () => {

        loginWithGoogle()
        .then((user) => setUser(user))
        .catch((err) => console.log(err))
    }
);