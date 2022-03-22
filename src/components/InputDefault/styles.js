import styled from "styled-components";

export const Inputs = styled.div`
  border: 2px solid var(--color-secondary);
  border-color: ${props => props.bordercolor && props.bordercolor};
  border-radius: ${(props)=> props.radius ? props.radius : '3px'};
  background-color: ${props => props.backgrd && props.backgrd};
  position: relative;
  height: 40px;
  
  width: ${props => props.width};

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
    margin-top: -27px;
    margin-left: 3px;
    font-size: 18px;
    
    color: var(--color-secondary);
  }
  input:focus + label {
    margin-top: -42px;
    padding-left: 3px;
    padding-right: 3px;
    background: var(--white);
    font-size: 10px;
    transition: 0.2s;
    border-radius: 10px;
  }
  input:not(:placeholder-shown) + label {
    margin-top: -42px;
    background: var(--white);
    padding-left: 3px;
    padding-right: 3px;
    font-size: 10px;
    transition: 0.2s;
    border-radius: 10px;
   
  }
`;
