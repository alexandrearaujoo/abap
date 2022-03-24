import styled from "styled-components";

export const StyledSectionNews = styled.section `
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--purple-1);
    padding: 10px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const StyledSection = styled.div `
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h2 {
    text-align: center;
  }
  h3{
    text-align: center;
    padding: 0;
  }

  article {
    display: flex;
    flex-direction: column;

    p {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2px;
    }
  }
`

export const DivNoticias = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  background-color: var(--background-menus);
`