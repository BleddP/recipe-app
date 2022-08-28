import { configureStore } from '@reduxjs/toolkit'

// Stores
import { dishes } from './dishes'
import { toaster } from './toaster'

const store = configureStore({
    reducer: {
        toaster: toaster.reducer,
        dishes: dishes.reducer
    }
  })

export default store