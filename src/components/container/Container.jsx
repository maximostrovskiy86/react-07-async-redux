import {DefaultContainer} from "./Container.styled.";

const Container = ({ children }) => {
    return (
        <DefaultContainer>
            {children}
        </DefaultContainer>
    )
}

export default Container;