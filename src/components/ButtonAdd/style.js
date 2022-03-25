import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) => props.background};
  border: 0;
  border-radius: ${(props) => props.radius};
  width: ${(props) => props.width};
  height: ${(props) => props.heigth};
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => props.marginBottom};
  cursor: pointer;


  svg {
    transition: 0.5s;
    color: ${(props) => props.color};
    font-size:20px ;
  }
  :active {
    background-color: var(--color-secondary);
    svg{color:var(--black);}
  }
`;
