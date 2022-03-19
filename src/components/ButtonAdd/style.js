import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) => props.background};
  border: 0;
  border-radius: 5px;
  width: ${props => props.width};
  height: ${props => props.heigth};
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${props => props.marginBottom};
  cursor: pointer;

  :hover {
      filter: brightness(1);
  }
  svg {
    transition: 0.5s;
    color: ${props => props.color}
  
  }
`;