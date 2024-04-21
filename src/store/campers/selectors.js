export const selectAllCampers = (state) => state.campers?.campers;
export const selectIsFirstLoading = (state) => state.campers.isFirstLoading;
export const selectIsFiltersLoading = (state) => state.campers.isFiltersLoading;
export const selectIsMoreLoading = (state) => state.campers.isMoreLoading;
export const selectError = (state) => state.campers.error;
export const selectTotalCampers = (state) => state.campers.total;
export const selectFilteredCampers = (state) => state.campers.filteredCampers;
