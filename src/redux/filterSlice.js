import { createSlice } from "@reduxjs/toolkit";

// const filtersInitialState = 'glo';

const filtersSlice = createSlice({
	name: "filter",
	initialState: '',
	reducers: {
		changeFilter(state, action) {
			console.log("actionFilter", action)
			console.log("stateFilter", state.contacts)
			state.filter = action.payload;
		},
	},
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
