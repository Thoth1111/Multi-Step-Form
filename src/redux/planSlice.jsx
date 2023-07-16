import { createSlice } from '@reduxjs/toolkit';

const planSlice = createSlice({
    name: 'plan',
    initialState: {
        type: '',
        price: '',
        annual: false,
    },

    reducers: {
        setPlan: (state, action) => {
            const { type, price, annual } = action.payload;
            state.type = type;
            state.price = price;
            state.annual = annual;
        },       
    },
});

export const { setPlan } = planSlice.actions;

export default planSlice.reducer;