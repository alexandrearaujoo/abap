import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  top: 12vh;
  z-index: 0;

  h2 {
      font-size: var(--fontsize-h2);
      padding: 20px 0;
  }

  h3 {
      font-size: var(--fontsize-h3);
      padding: 20px 0;
  }

  @media (min-width: 768px) {
    width: 80vw;
    height: 88vh;
  }
`