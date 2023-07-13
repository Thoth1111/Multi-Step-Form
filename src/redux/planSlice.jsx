import { createSlice } from '@reduxjs/toolkit';
import userSlice from './userSlice';

const planSlice = createSlice({
    name: 'plan',
    initialState: {
        name: '',
        price: '',
        annual: false,
    },

    reducers: {
        setPlan: (state, action) => {
            const { name, price, annual } = action.payload;
            state.name = name;
            state.price = price;
            state.annual = annual;
        },       
    },
});

export const { setPlan } = planSlice.actions;

export default planSlice.reducer;