import axios from "axios";
import {
	fetchContactRequest,
	fetchContactSuccess,
	fetchContactError,
	fetchRemoveContactRequest,
	fetchRemoveContactSuccess,
	fetchRemoveContactError, fetchAddContactRequest, fetchAddContactSuccess, fetchAddContactError
} from "./contactsSlice";

axios.defaults.baseURL = "https://6734c194a042ab85d11b7d7b.mockapi.io/redux/";

export const fetchContacts = () => async dispatch => {
	try {
		// Индикатор загрузки
		dispatch(fetchContactRequest());
		// HTTP-запрос
		const response = await axios.get("/contacts");
		// Обработка данных
		console.log("response.data", response.data)
		dispatch(fetchContactSuccess(response.data));
	} catch (e) {
		// Обработка ошибки
		dispatch(fetchContactError(e.message));
	}
};

export const fetchAddUser = (user) => async dispatch => {
	try {
		dispatch(fetchAddContactRequest);
		
		const response = await axios.post('/contacts', user);
		dispatch(fetchAddContactSuccess(response.data));
	} catch (error) {
		dispatch(fetchAddContactError(error));
	}
}


export const fetchRemoveUser = id => async dispatch => {
	try {
		dispatch(fetchRemoveContactRequest());
		
		const response = await axios.delete(`/contacts/${id}`);
		dispatch(fetchRemoveContactSuccess(response.data));
	} catch (e) {
		dispatch(fetchRemoveContactError(e.message));
	}
};

