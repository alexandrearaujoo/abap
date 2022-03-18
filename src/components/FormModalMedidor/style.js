import styled from 'styled-components'

export const Form = styled.form`
    width: 100%;
    height: 450px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: var(--color-secondary);
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    h2 {
        text-align: center;
        color: var(--white);
        margin: 0;
    }
    label {
        color: var(--white);
    }
    input {
        width: 80%;
        border-radius: 15px;
        border: none;
        padding: 5px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`