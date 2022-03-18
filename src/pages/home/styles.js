import styled from "styled-components";

export const Main = styled.main`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

background-color: var(--white);
width: 100vw;
height: 90vh;
margin: 0 auto;

@media (min-width: 768px) {
  width: 80vw;
}

article {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 80%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }

  section {
    height: 100%;
    padding: 10px;

    h2 {
      font-size: var(--fontsize-h3);
      margin: 0 0 10px;
    }

    p {
      font-size: 14px;
    }
  }
}
`

export const StyledFigure = styled.figure`
  display: flex;
  width: 80%;
  
  img {
    width: 100%;
    object-fit: fill;
    border: none;
    border-radius: 5px;

    @media (min-width: 768px) {
      height: 40vh;
    }

    @media (min-width: 1000px) {
      height: 50vh;
    }
  }
`
