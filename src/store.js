// import { configureStore } from '@reduxjs/toolkit'
// import treatmentReducer from './Feature/treatements/treatementSlice'


// const store = configureStore({
// reducer: {
// treatments: treatmentReducer,
// },
// })


// export default store


import { configureStore } from "@reduxjs/toolkit";
import treatmentReducer from "./Feature/treatements/treatementSlice";

export const store = configureStore({
  reducer: {
    treatments: treatmentReducer,
  },
});
