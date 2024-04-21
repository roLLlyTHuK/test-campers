import { createSlice } from "@reduxjs/toolkit";
import { getFilteredCampers, getFullListCampers } from "./operations";

const initialState = {
  campers: [],
  isFirstLoading: false,
  error: null,
  total: null,
  isMoreLoading: false,
  filteredCampers: [],
  filtersLoading: false,
  filtersError: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setFilteredCampers(state, action) {
      state.filteredCampers = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFullListCampers.pending, (state) => {
        state.filtersError = null;
        state.filtersLoading = true;
      })
      .addCase(getFullListCampers.fulfilled, (state, { payload }) => {
        state.filtersLoading = false;
        state.campers = payload;
        state.filteredCampers = payload;
      })
      .addCase(getFullListCampers.rejected, (state, { payload }) => {
        state.filtersLoading = false;
        state.filtersError = payload;
      })
      .addCase(getFilteredCampers.pending, (state) => {
        state.filtersError = null;
        state.filtersLoading = true;
      })
      .addCase(getFilteredCampers.fulfilled, (state, { payload }) => {
        state.filtersLoading = false;
        state.filteredCampers = payload;
      })
      .addCase(getFilteredCampers.rejected, (state, { payload }) => {
        state.filtersLoading = false;
        state.filtersError = payload;
      });
  },
});

export const { setFilteredCampers } = campersSlice.actions;

export default campersSlice.reducer;
