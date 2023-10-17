import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../feautures/loginslice';
import signupReducer from '../feautures/signupSlice';


const store=configureStore({
    reducer:{
      login:loginReducer,
      signup:signupReducer,

    },
  });

export default store