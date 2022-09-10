import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  posts: [],
  isLoading: false,
  error: ""
}

// To generate the actions: pending, fulfiled, and rejected  
export const getPosts = createAsyncThunk("post/getPosts", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
  return res.data
})

export const postSlice = createSlice({
  name: 'post',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload
      state.error = ""
      state.isLoading = false
    })
    builder.addCase(getPosts.rejected, (state, action) => {
      state.isLoading = true
      state.posts = []
      state.error = action.error.message
    })
  }
})

export default postSlice.reducer