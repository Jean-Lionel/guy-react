import { configureStore } from '@reduxjs/toolkit'
import nisysSlice from './nisys_slice'

export default configureStore({
    reducer: {
        nisys: nisysSlice,
    },
})


