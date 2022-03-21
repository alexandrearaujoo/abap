import styled from "styled-components";

export const Container = styled.li`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 8px auto;
  background-color: var(--white);
  border-radius: 3px;
  padding: 5px;
  box-shadow: 3px 3px 10px -2px rgba(0, 0, 0, 0.5);
  align-items: center;

  span {
    width: 43%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ativo {
    background-color: #008000;
    box-shadow: inset -2px -1px 6px -1px rgba(255, 255, 255, 1);
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
  .inativo {
    background-color: #ff0000;
    box-shadow: inset -2px -1px 6px -1px rgba(255, 255, 255, 1);
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }

  span:first-child{
    width: 60%;

  }

  span:nth-child(n+2):nth-child(-n+5){
    display: flex;
    justify-content: center;
    text-align: center;
    width: 20%;

  }
`;
