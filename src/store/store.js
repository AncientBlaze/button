import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import wishSlice from './wishSlice'

export default configureStore({
    reducer: {   
        wishlists: wishSlice,
        cart: cartSlice,
    }
})