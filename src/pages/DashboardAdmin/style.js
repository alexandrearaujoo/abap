import styled from "styled-components";

export const StyledSectionNews = styled.section `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;


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

  article {
    display: flex;
    flex-direction: column;
    gap: 5px;

    p {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: var(--body);

        @media (min-width: 768px) {
            flex-direction: row;
        }
    }
  }
`