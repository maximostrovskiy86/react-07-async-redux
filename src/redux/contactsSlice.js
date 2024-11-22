import {createSlice} from "@reduxjs/toolkit";

const contactsSlice = createSlice({
	name: "contacts",
	initialState: {
		isLoading: false,
		error: null,
		items: [],
	},
	reducers: {
		fetchContactRequest(state) {
			state.isLoading = true;
		},
		fetchContactSuccess(state, action) {
			state.isLoading = false;
			state.error = null;
			state.items = action.payload;
		},
		fetchContactError(state, action) {
			state.isLoading = false;
			state.error = action.payload;
		},
		// Add item
		fetchAddContactRequest(state) {
			state.isLoading = true;
		},
		fetchAddContactSuccess(state, action) {
			state.isLoading = false;
			state.error = null;
			//  state.items = action.payload; работает Immer делает иммутабеотную операцию.
			state.items = [...state.items, action.payload]; // Classic method
		},
		fetchAddContactError(state, action) {
			state.isLoading = false;
			state.error = action.payload;
		},
		
		// Remove item
		fetchRemoveContactRequest(state) {
			state.isLoading = true;
		},
		fetchRemoveContactSuccess(state, action) {
			console.log("action", action)
			state.isLoading = false;
			state.error = null;
			state.items = state.items.filter(item => item.id !== action.payload.id);
		},
		fetchRemoveContactError(state, action) {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

console.log("contactsSlice.actions", contactsSlice.actions)

export const {
	fetchContactRequest,
	fetchContactSuccess,
	fetchContactError,
	fetchAddContactRequest,
	fetchAddContactSuccess,
	fetchAddContactError,
	fetchRemoveContactRequest,
	fetchRemoveContactSuccess,
	fetchRemoveContactError,
} =
	contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;