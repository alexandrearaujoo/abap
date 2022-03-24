import styled from "styled-components";

export const Form = styled.form`
  width: 80%;
  height: 500px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: var(--background-menus);
  border-radius: 15px;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;

  animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(25px);
      transform: translateY(25px);
    }
  }

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
      font-size: 20px;
      
    }
  }

  

  h2 {
    text-align: center;
    color: var(--black);
  }
`;

export const DivInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivLocal = styled.div`
  display: flex;
  flex-direction: column;
  width: 47.5%;
  align-items: center;
  height: 108px;
  display: flex;
  justify-content: space-around;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
