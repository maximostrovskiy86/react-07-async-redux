import {useMemo} from "react";
import {useSelector } from "react-redux";
import {getContacts, getVisibleContacts} from "../../redux/selectors";
import { ContactListWrapper} from "./ContactList.styled";
import ContactItem from "../contactItem";

const ContactList = () => {
	const {items} = useSelector(getContacts);
	const visibleContacts = useSelector(getVisibleContacts);
	
	// console.log("items", items)
	// console.log("filter", filter)
	
	// const visibleContacts = useMemo(() => {
	//     return items.filter(contact =>
	//         contact.name.toLowerCase().includes(filter.toLowerCase()));
	// }, [items, filter]);
	
	return (
		<ContactListWrapper>
			<ul>
				{visibleContacts.map(contact => (
					<ContactItem key={contact.id} contact={contact} id={contact.id}/>
				))}
			</ul>
		</ContactListWrapper>
	)
}

export default ContactList;