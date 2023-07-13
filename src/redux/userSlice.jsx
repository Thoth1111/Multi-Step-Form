import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        email: '',
        phone: '',
    },

    reducers: {
        setUserInfo: (state, action) => {
            const { name, email, phone } = action.payload;
            state.name = name;
            state.email = email;
            state.phone = phone;
        },
    },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;