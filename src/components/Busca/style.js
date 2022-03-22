import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  background-color: var(--color-secondary);
  border-radius: 3px;
  box-shadow: 3px 3px 10px -2px rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;


`;

export const DivBusca = styled.div`
  width: 90%;
  height: 45px;
  display: flex;
  justify-content: space-between;

  align-items: center;
  background-color: var(--white);
  border-radius: 3px;
  padding: 5px;

  form{
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    background-color: transparent;
    border-radius: 3px;
    padding: 5px;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
  }

  section{
    display: flex;
    flex-direction: row;
    width: 60%;

  }
  section button{
    align-self: flex-start;
    margin-right: 0;
  }

  select {
    background-color: var(--color-secondary);
    color: var(--white);
    height: 30px;
    font-weight: 600;
    border: none;
    border-radius: 5px;
  }

  select:focus {
    box-shadow: 0 0 0 0;
    border: none;
    outline: 0;
  }

  select:hover {
    /* filter: brightness(1); */
    background: var(--color-primary);
    
  }

  select:active {
    background-color: var(--color-secondary);
    color:var(--black);
  }



`;


export const FormOptions = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  
  gap: 10px;


`