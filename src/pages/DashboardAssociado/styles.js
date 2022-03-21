import styled from "styled-components";

export const StyledSectionNews = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 200px;
    background-color: var(--purple-1);
    padding: 10px;

    @media (min-width: 768px) {
      
    }
  }
`