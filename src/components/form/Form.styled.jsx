import styled from "@emotion/styled";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    
    label {
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    button {
        max-width: 120px;
        margin-top: 15px;
        padding: 10px 15px;
        background-color: #84d8e3;
        border-radius: 5px;
        cursor: pointer;
        transition: transform 0.25s ease-in-out;

        &:hover {
            transform: scale(1.05);
        }

        &:active {
            background-color: #84D1E3FF;
        }
    }
`