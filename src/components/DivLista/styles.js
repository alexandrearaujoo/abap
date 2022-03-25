import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-height: 375px;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-secondary);
  border-radius: 3px;
  box-shadow: 3px 3px 10px -2px rgba(0, 0, 0, 1);

  ::-webkit-scrollbar {
    display: none;
  }

  aside {
    width: 90% ;
    /* height: 10px; */
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    /* position: fixed; */
    height:1px;
    /* background-color:red; */
    background-color: var(--color-secondary);
    padding: 0px 8px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    max-width: 900px;
    align-items: center;
    font-size: var(--headline);
  }

  aside span:first-child{
    margin-top:20px ;
    width: 60%;
    text-align: center;
  }

  aside span:nth-child(n+2):nth-child(-n+5){
    margin-top:20px ;
    text-align: center;
    width: 20%;

  }




  ul {
    width: 100%;
    max-height: 500px;
    overflow-y: scroll;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--color-secondary);
    margin-top: 25px;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
