import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showModal: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggle: (state) => {
      state.showModal = !state.showModal
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggle } = modalSlice.actions

export default modalSlice.reducer