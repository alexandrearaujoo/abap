import styled from "styled-components";

export const Inputs = styled.div`
  border: 2px solid var(--color-secondary);
  border-radius: 5px;
  position: relative;
  height: 30px;
  width: 50%;

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
    color: var(--black);
  }
  input:focus + label {
    margin-top: -32px;
    padding-left: 3px;
    padding-right: 3px;
    background: var(--white);
    font-size: 10px;
    transition: 0.2s;
  }
  input:not(:placeholder-shown) + label {
    margin-top: -32px;
    background: var(--white);
    padding-left: 3px;
    padding-right: 3px;
    font-size: 10px;
    transition: 0.2s;
  }
`;
