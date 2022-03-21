import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background-menus);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 370px;
  border: none;
  border-radius: 15px;
  margin: 0 auto;
  max-width: 500px;

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