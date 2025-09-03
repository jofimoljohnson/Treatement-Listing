

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTreatments, addTreatment, deleteTreatment, clearAll } from "../../api/treatementApi";

export const fetchTreatments = createAsyncThunk("treatments/fetch", async () => {
  return await getTreatments();
});

export const createTreatment = createAsyncThunk("treatments/create", async (treatment) => {
  return await addTreatment(treatment);
});

export const removeTreatment = createAsyncThunk("treatments/remove", async (id) => {
  return await deleteTreatment(id);
});

export const clearTreatments = createAsyncThunk("treatments/clear", async () => {
  return await clearAll();
});

const treatmentSlice = createSlice({
  name: "treatments",
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTreatments.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(createTreatment.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(removeTreatment.fulfilled, (state, action) => {
        state.items = state.items.filter((t) => t.id !== action.payload);
      })
      .addCase(clearTreatments.fulfilled, (state) => {
        state.items = [];
      });
  },
});

export default treatmentSlice.reducer;
