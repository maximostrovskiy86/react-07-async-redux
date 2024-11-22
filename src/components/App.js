import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Container from './container';
import ContactList from './contactList';
import Section from './section';
import Form from "./form";
import Filter from './filter';
import {fetchContacts} from "../redux/operations";
import {Circles} from "react-loader-spinner";
import {getContacts} from "../redux/selectors";

function App() {
	const [valueFilter, setValueFilter] = useState("");
	const dispatch = useDispatch();
	const {isLoading, error} = useSelector(getContacts);
	
	
	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);
	
	return (
		<Container>
			<Section title="Phonebook">
				<Form/>
			</Section>
			<Section title="List Contacts">
				<Filter filter={valueFilter} setFilter={setValueFilter}/>
				<ContactList filter={valueFilter} />
			</Section>
			{isLoading && !error && <Circles
				height="80"
				width="80"
				color="#4fa94d"
				ariaLabel="circles-loading"
				wrapperStyle={{fill: 'blue'}}
				wrapperClass="spinner"
				visible={true}
			/>}
		</Container>
	);
}

export default App;
