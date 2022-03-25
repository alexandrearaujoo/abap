
import styled from "styled-components";

export const Form = styled.form`
  width: 80%;
  height: 490px;
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
  animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;


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
    height: 64px;
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
=======
import styled from 'styled-components'

export const Form = styled.form`
    width: 80%;
    height: 450px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: var(--color-secondary);
    border-radius: 15px;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    h2 {
        text-align: center;
        color: var(--white)
    }
`

export const DivInfos = styled.form`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DivLocal = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    
`