import styled from "styled-components";

export const StyledContainer = styled.div `
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: ${(props) => props.column ? "center" : "space-between"};
  align-items: center;
  gap: 10px;

  width: ${(props) => props.column ? "100%" : "80%"};

  height: 100%;
  margin: 0 auto;
`;