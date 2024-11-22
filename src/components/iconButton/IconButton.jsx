import PropTypes from "prop-types";
import {IconButtonStyled} from "./IconButton.styled";

const IconButton = ({children, deleteUser, id,  ...allyProps}) => {
    return (
        <IconButtonStyled type="button" onClick={() => {
            deleteUser(id)
        }} {...allyProps}>
            {children}
        </IconButtonStyled>
    )
}

IconButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    'aria-label': PropTypes.string.isRequired,
}

export default IconButton;