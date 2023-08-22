import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import planReducer from './planSlice';
import addOnReducer from './addOnSlice';

const store =  configureStore({
    reducer: {
        user: userReducer,
        plan: planReducer,
        addOn: addOnReducer
    },
});

export default store;