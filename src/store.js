import { configureStore } from '@reduxjs/toolkit'
import treatmentsReducer from './feature/treatements/treatementSlice'


const store = configureStore({
reducer: {
treatments: treatmentsReducer,
},
})


export default store