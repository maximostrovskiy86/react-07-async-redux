import {createSelector} from '@reduxjs/toolkit';


export const getContacts = state => state.contacts;
export const getLoading = state => state.isLoading;

const getFilter = state => state.filter;

export const getVisibleContacts = createSelector([getContacts, getFilter],
	({items}, filter) => {
		console.log("items", items)
		return items.filter(item => {
			console.log("item", typeof item.name)
			return item.name.toLowerCase().includes(filter.toLowerCase());
		})
		
	});
