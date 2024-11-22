import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FormContainer} from "./Form.styled";
import {nanoid} from "nanoid";
import {Notify} from 'notiflix/build/notiflix-notify-aio';
import {fetchAddUser} from "../../redux/operations";
// import { addContact } from "../../redux/actions";
import { getContacts } from "../../redux/selectors";


const Form = () => {
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	const dispatch = useDispatch();
	const {items} = useSelector(getContacts);
	
	const onHandleChange = e => {
		const {value, name} = e.target;
		
		switch (name) {
			case 'name':
				setName(value);
				break;
			case 'number':
				setNumber(value);
				break;
			default:
				return;
		}
	}
	
	 const isContactExist = (name) => {
		name = name.toLowerCase();
		return items.some(item => item.name.toLowerCase() === name);
	}
	
	const handleSubmit = (e) => {
		e.preventDefault();
		const isExistContact = isContactExist(name);
		
		if (isExistContact) {
			Notify.failure(`${name} is already in Contacts`);
			return;
		}
		
		dispatch(fetchAddUser({
			name,
			number,
			id: nanoid(8)
		}))
		
		reset();
	}
	
	const reset = () => {
		setName('');
		setNumber('');
	}
	
	return (
		<FormContainer onSubmit={handleSubmit}>
			<label htmlFor="">Name
				<input
					type="text"
					name="name"
					value={name}
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					required
					onChange={onHandleChange}
				/>
			</label>
			<label htmlFor="">Phone number
				<input
					type="tel"
					name="number"
					value={number}
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					required
					onChange={onHandleChange}
				/>
			</label>
			<button type="submit">Add Contact</button>
		</FormContainer>
	)
}

export default Form;