import { createSlice } from '@reduxjs/toolkit';

const addOnSlice = createSlice({
  name: 'addOn',
  initialState: [],

  reducers: {
    pickAddOn: (state, action) => [...state, action.payload],
  },
});

export const { pickAddOn } = addOnSlice.actions;

export default addOnSlice.reducer;
