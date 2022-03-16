import styled from "styled-components"

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-primary);
  width: 100vw;
  height: 10vh;
  color: var(--white);
  box-shadow: 3px 5px 12px -4px rgba(0, 0, 0, 0.91);

  svg {
    font-size: 30px;
  }

  h1 {
    font-size: var(--fontsize-h3);
  }
`