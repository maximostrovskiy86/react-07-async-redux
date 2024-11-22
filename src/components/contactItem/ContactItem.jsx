import { useDispatch } from 'react-redux';
import IconButton from "../iconButton";
import {ReactComponent as DeleteIcon} from "../../icons/cross.svg";
import {fetchRemoveUser} from "../../redux/operations";
import {ContactItemWrapper} from "./ContactItem.styled";

const ContactItem = ({contact, id}) => {
    const dispatch = useDispatch();
    
    const removeUser = () => {
        dispatch(fetchRemoveUser(id));
    }
    
    return (
        <ContactItemWrapper>
            <span>{contact.name}: </span><span>{contact.number} </span>
            <span>
                <IconButton deleteUser={removeUser} id={id} aria-label="Delete User">
                    <DeleteIcon width={30} height={30} />
                </IconButton>
            </span>
        </ContactItemWrapper>
    )
}

export default ContactItem;