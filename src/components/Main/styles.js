import styled from "styled-components";

export const StyledMain = styled.main`

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--white);
  width: 100%;
  max-width: 950px;
  height: 88vh;
  position: relative;
  top: 12vh;

  @media screen and (min-width: 1024px){
    margin: 0 auto;
  }
  h2 {
      font-size: 20px;
     margin-bottom: 15px;
  }

  h3 {
      font-size: var(--fontsize-h3);
      padding: 20px 0;
  }
`