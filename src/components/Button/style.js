import styled from 'styled-components'

export const ButtonStyled = styled.button`
    position: relative;
    display: inline-block;
    margin: 15px;
    padding: 5px 30px;
    text-align: center;
    font-size: 18px;
    letter-spacing: 1px;
    text-decoration: none;
    color: var(--white);
    background: transparent;
    cursor: pointer;
    transition: ease-out 0.5s;
    border-radius: 30px;
    border: 2px solid var(--white);
    border-radius: 10px;
    box-shadow: inset 0 0 0 0 var(--color-primary);

        :hover {
            color: white;
            box-shadow: inset 0 -100px 0 0 var(--color-primary);
        }
        :active {
            transform: scale(0.9);
            }
`