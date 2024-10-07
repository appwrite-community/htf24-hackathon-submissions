import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertVal: 0,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    added: (state) => {
      state.alertVal = 1;
    },
    deleted: (state) => {
      state.alertVal = 2;
    },
    error: (state) => {
      state.alertVal = 3;
    },
    reset: (state) => {
      state.alertVal = 0;
    },
  },
});

export const { added, deleted, error, reset } = alertSlice.actions;

export default alertSlice.reducer;
