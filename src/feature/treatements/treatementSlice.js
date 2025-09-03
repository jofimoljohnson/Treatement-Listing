import { createSlice } from '@reduxjs/toolkit'


const treatmentsSlice = createSlice({
name: 'treatments',
initialState: {
items: [],
},
reducers: {
addTreatment(state, action) {
const exists = state.items.find((t) => t.id === action.payload.id)
if (!exists) state.items.push(action.payload)
},
removeTreatment(state, action) {
state.items = state.items.filter((t) => t.id !== action.payload)
},
clearAll(state) {
state.items = []
},
},
})


export const { addTreatment, removeTreatment, clearAll } = treatmentsSlice.actions
export default treatmentsSlice.reducer