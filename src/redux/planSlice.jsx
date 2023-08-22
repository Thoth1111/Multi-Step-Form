import { createSlice } from '@reduxjs/toolkit';

const planSlice = createSlice({
    name: 'plan',
    initialState: {
        type: '',
        price: '',
        yearly: false,
    },

    reducers: {
        setPlan: (state, action) => {
            const { type, price, yearly } = action.payload;
            state.type = type;
            state.price = price;
            state.yearly = yearly;
        },       
    },
});

export const { setPlan } = planSlice.actions;

export default planSlice.reducer;