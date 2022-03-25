
import styled, { css } from "styled-components";

export const Inputs = styled.div`
  border: 2px solid var(--white);
  border-radius: 3px;
  position: relative;
  height: 40px;
  width: 90%;
  background-color: var(--white);
  line-height: 10px;
  margin: 0 auto;



    ${(props) =>
            props.isErrored &&
            css`
            border-color: orange;
        `}

  ${(props) =>
    props.isErrored &&
    css`
      border-color: red;
    `}

    ${(props) =>
    css`
      border-color:${(props)=> props ? props.bordercolor : 'transparent'};
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
    margin-top: -23px;
    margin-left: 3px;
    font-size: 18px;
    color: var(--black);
   
  }
  input:focus + label {
    margin-top: -43px;
    padding-left: 3px;
    padding-right: 3px;
    background: var(--background-menus);
    font-size: 10px;
    transition: 0.2s;
    border-radius: 10px;
    span {
      ${(props) =>
        props.isErrored &&
        css`
          color: red;
          font-size: 10px;
        `}
    }
  }
  input:not(:placeholder-shown) + label {
    margin-top: -43px;
    background: var(--background-menus);
    padding-left: 3px;
    padding-right: 3px;
    font-size: 10px;
    transition: 0.2s;
    border-radius: 10px;
  }
  label {
    ${(props) =>
      props.isErrored &&
      css`
        color: red;
        margin-top: -43px;
        padding-left: 3px;
        padding-right: 3px;
        font-size: 10px;
        background: var(--background-menus);
        border-radius: 10px;
      `}
  }
`;
