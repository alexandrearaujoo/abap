import styled from "styled-components";

export const Form = styled.form`
  width: 80%;
  height: 550px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: var(--background-menus);
  border-radius: 15px;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  z-index: 1;

  button:first-child {
    align-self: flex-end;
    margin-right: 10px;
    width: 50px;
    height: 50px;
    svg {
      color: var(--black);
    }
  }

  button:first-child:hover{
    background-color:transparent;
    svg{
      color: var(--color-primary);
      font-size: 30px;
    }
  }
  button:first-child:active{
    background-color:transparent;
    svg{
      background-color: var(--color-secondary);
      border-radius: 50%;
      
    }
  }

  h2 {
    margin-top: -50px;
    text-align: center;
    color: var(--black);
    
  }
`;

export const DivInfos = styled.div`
  width: 95%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivLocal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  height: 100%;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
