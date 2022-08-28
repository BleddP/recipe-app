import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState =  {
    open: false,
    content: null,
}

const toasterSlice = createSlice({
  name: 'toaster',
  initialState,
  reducers: {
    show: (state, data) => {
      state.open = true
      state.content = data.payload
    },
    close: state => {
      state.open = false
    },
    clearContent: state => {
        state.content = null
    }
  }
})


export const { show, close, clearContent } = toasterSlice.actions

export const store = configureStore({
  reducer: toasterSlice.reducer
})