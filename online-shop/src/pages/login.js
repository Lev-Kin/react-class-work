import React, {useState} from "react";
import { appSignOut, createUser, signIn } from "../firebase";
import {googleLogin} from '../redux/actions/userAuth';
import {useDispatch} from 'react-redux';

const defaultState = {
  email: '',
  password: ''
};

export const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(defaultState);

  const submitHandler = (e) => {
    e.preventDefault();

    // redux!
    const {email, password} = formData;
    createUser(email, password);
  };

  const onInputChange = ({target: {name, value}}) => {
    setFormData((formData) => ({
      ...formData,
      [name]: value
    }));
  };

  const signInHandler = () => {
    const {email, password} = formData;
    signIn(email, password);
  };

  const loginWithGoogle = () => {
    dispatch(googleLogin());
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <div>
          <input type="email" name='email' onChange={onInputChange} />
        </div>
        <div>
          <input type="password" name='password' onChange={onInputChange} />
        </div>
        <button onClick={signInHandler}>Sign In</button>
        <button type='submit' onClick={submitHandler}>Create account</button>
      </form>
      <button onClick={loginWithGoogle}>Login with google</button>
      <button onClick={appSignOut}>Sign out</button>
    </div>
  );
};
