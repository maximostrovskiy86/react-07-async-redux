import styled from "@emotion/styled";

export const ContactItemWrapper = styled.li`
    width: 300px;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span:last-of-type {
        display: inherit;
        justify-content: end;
        align-items: center;
        width: 60px;
    }

    svg {
        cursor: pointer;
    }
`

