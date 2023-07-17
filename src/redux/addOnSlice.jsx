import { createSlice } from '@reduxjs/toolkit';

const addOnSlice = createSlice({
  name: 'addOn',
  initialState: [],

  reducers: {
    setAddOn: (state, action) => {
      return state = action.payload;
    },
    updateAddOn: (state) => {
      state.forEach((addOn) => addOn.price *= 10);
    }
  },
});

export const { setAddOn, updateAddOn } = addOnSlice.actions;

export default addOnSlice.reducer;
