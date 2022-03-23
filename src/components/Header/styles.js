import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-primary);
  width: 100vw;
  height: 12vh;
  color: var(--white);
  box-shadow: 0px 4px 4px var(--black);
  position: fixed;
  z-index: 1;

  h1 {
    font-size: var(--fontsize-h3);
  }

  img {
    width: 72px;

    @media (min-width: 768px) {
      width: 82px;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: ${(props) => props.space && "10px"};

    svg {
      width: 30px;
      height: 30px;
      margin: 0 3px 0 ;
    }

    @media (max-width: 425px) {
      span {
        display: none;
      }
    }
  }
`;
