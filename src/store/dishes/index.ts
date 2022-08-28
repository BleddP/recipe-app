import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const dishes = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    addNewDish: (state, data) => {
      const dish = data.payload
      state.push(dish)
    },
    removeDish: (state, data) => {
      const {id} = data.payload
      const removed = state.filter(item => item.id !== id)
      state = removed
    },
  }
})

export const { addNewDish, removeDish } = dishes.actions