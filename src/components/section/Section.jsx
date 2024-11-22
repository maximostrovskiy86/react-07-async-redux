import {SectionContainer} from "./Section.styled";


const Section = ({children, title}) => {
    return (
        <SectionContainer>
            <h2>{title}</h2>
            {children}
        </SectionContainer>
    )
}

export default Section;