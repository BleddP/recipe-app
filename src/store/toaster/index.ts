import { createSlice } from '@reduxjs/toolkit'

const initialState =  {
    open: false,
    content: null,
}

export const toaster = createSlice({
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

export const { show, close, clearContent } = toaster.actions