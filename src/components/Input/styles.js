import styled, { css } from "styled-components";

export const Inputs = styled.div`
  border: 2px solid var(--white);
  border-radius: 3px;
  position: relative;
  height: 30px;
  width: 90%;
  margin-top: 20px;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: orange;
    `}

    ${(props) =>
    css`
      border-color:${(props)=> props.bordercolor};
    `}
  input {
    background: transparent;
    border: none;
    box-shadow: 0 0 0 0;
    outline: 0;
    color: var(--black);
    width: 100%;
    height: 95%;
    font-size: 15px;
  }

  textarea:focus,
  input:focus,
  select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }

  label {
    pointer-events: none;
    position: absolute;
    /* margin-left: -82px; */
    /* margin-top: 7px; */
    margin-top: -23px;
    margin-left: 3px;
    font-size: 15px;
    color: var(--white);
  }
  input:focus + label {
    margin-top: -32px;
    padding-left: 3px;
    padding-right: 3px;
    background: var(--color-secondary);
    font-size: 10px;
    transition: 0.2s;
    span {
      ${(props) =>
        props.isErrored &&
        css`
          color: orange;
          font-size: 10px;
        `}
    }
  }
  input:not(:placeholder-shown) + label {
    margin-top: -32px;
    background: var(--color-secondary);
    padding-left: 3px;
    padding-right: 3px;
    font-size: 10px;
    transition: 0.2s;
  }
  label {
    ${(props) =>
      props.isErrored &&
      css`
        color: orange;
        margin-top: -32px;
        padding-left: 3px;
        padding-right: 3px;
        font-size: 10px;
        background: var(--color-secondary);
      `}
  }
`;
