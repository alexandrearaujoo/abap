import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  background-color: var(--color-primary);
  height: 100%;
`;

export const Form = styled.form`
  width: 90%;
  height: 370px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: var(--background-menus);
  border-radius: 15px;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

  h2 {
    text-align: center;
    color: var(--black);
  }

  span {
    font-size: var(--headline);
    text-align: center;
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
`;

export const Div = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    select {
      background-color: var(--color-secondary);
      color: var(--white);
      height: 30px;
      border-radius: 5px;
    }
`

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary);
    height: inherit;
    width: 100%;
    max-width: 800px;
  
    h2{
        text-align: center;
        color: var(--white);
    }
`