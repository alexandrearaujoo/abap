import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  
`;

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
  top: 0;
  z-index: 1;
  animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

  h2 {
    text-align: center;
    color: var(--black);
  }

  @keyframes slide-bottom {
    0% {
  -webkit-transform: translateY(0);
          transform: translateY(0);
    }
    100% {
  -webkit-transform: translateY(100px);
          transform: translateY(100px);
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
      font-size: 20px;
      border-radius: 50%;
      
    }
  }

`;

export const Div = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    select {
        background-color: var(--color-secondary);
    color: var(--white);
    height: 40px;
    width: 30%;
    border-radius: 5px;
    }
`