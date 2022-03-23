import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: var(--white);
  width: 100vw;
  height: 88vh;
  margin: 0 auto;
  position: relative;
  top: 12vh;
  z-index: -1;

  @media (min-width: 768px) {
    width: 80vw;
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin-top: 20px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: flex-start;
    }

    section {
      height: 100%;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin-top: 5px;
      line-height: 15px;

      h2 {
        font-size: var(--fontsize-h3);
        margin: 0 0 10px;
      }

      p {
        font-size: 12px;
        text-align: justify;
        word-break: break-all;
        word-spacing: 3px;
      }

      li {
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
`;

export const StyledFigure = styled.figure`
  display: flex;
  width: 80%;
  margin-top: 35px;

  img {
    width: 100%;
    object-fit: fill;
    border: none;
    border-radius: 10px;
    height: 30vh;

    @media (min-width: 768px) {
      height: 35vh;
    }

    @media (min-width: 1000px) {
      height: 45vh;
    }
  }
`;
