import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-primary);
  width: 100vw;
  height: 12vh;
  color: var(--white);
  box-shadow: 0px 4px 4px rgba(131, 131, 131, 1);
  position: fixed;
  z-index: 1;

  h1 {
    font-size: var(--fontsize-h3);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    svg {
      width: 25px;
      height: 25px;
    }
  }
`;
