import styled from "styled-components";

export const ButtonStyled = styled.button`
    width: ${props => props.width};
    height: 48px;
    margin: 15px 0;
    background-color: ${props => props.backgroundColor};
    color: #ffffff;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.5;

  &:hover {
    opacity: 0.8;
  }
`;
