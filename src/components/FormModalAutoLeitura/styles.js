import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background-menus);
  width: 298px;
  height: 370px;
  border: none;
  border-radius: 5px;
  margin: 0 auto;

  h1 {
    font-size: var(--fontsize-h1);
    margin-bottom: 10px;
  }

  span {
    font-size: var(--headline);
    margin-bottom: 10px;

  }
`

// export const StyledMain = styled.main`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `