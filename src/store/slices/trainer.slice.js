import { createSlice } from "@reduxjs/toolkit";

const trainerSlice = createSlice({
  name: 'trainer',
  initialState: null,
  reducers: {
    setTrainer: (state, actions) => actions.payload
  }
})

export const { setTrainer } = trainerSlice.actions

export default trainerSlice.reducer