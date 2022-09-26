import { configureStore } from "@reduxjs/toolkit"
import modalReducer from "../app/features/slices/modalSlice"
import postReducer from "../app/features/slices/postSlice"

const store = configureStore({
  reducer: {
    modal: modalReducer,
    post: postReducer,
  }
})

export default store