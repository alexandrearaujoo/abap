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
    gap: 15px;

    p {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: var(--body);
        
        span {
          margin: 5px 0 0 0;
          font-size: var(--headline);
        }

        @media (min-width: 425px) {
          flex-direction: row;

          span {
            margin: 0;
            font-size: var(--body);
          }
        }
    }
  }
`