import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
 
`;
export const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  height: 400px;
  width: 320px;
  background-color: #d9e0f5;
  color: #13191b;
  border-radius: 5px;

  .message-login {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    h3 {
      text-align: center;
      font-size: 18px;
      color: var(--grey-4);
    }
    span {
      font-size: 12px;
      text-align: center;
      margin: 10px;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    height: 100%;
    padding: 15px;
  }

  input {
    margin-top: 10px;
    height: 30px;
    width: 280px;
    padding: 0px 6px 0px 6px;
    border-radius: 0px;
    border: 1px solid #272b55;
    color: #272b55;
    font-size: 16px;
  }
  button {
    height: 10px;
    margin: 15px 0;

    color: white;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  button:hover {
    border: 2px solid #333333;
  }
  .btnRegister {
    width: 280px;
    height: 48px;
    margin: 15px 0;
    background: #4c526b;
    color: var(--grey-0);
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  .btnRegister:hover {
    border: 2px solid var(--grey-2_5);
    opacity: 0.8;
  }
  .btnLogin {
    width: 280px;
    height: 48px;
    margin: 15px 0;
    background-color: #4a5292;
    color: #ffffff;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  .btnLogin:hover {
    border: 2px solid #333333;
    opacity: 0.8;
  }
  .message-register {
    font-size: 12px;
    margin: 0;
    text-align: center;
    color: var(--Grey-1);
  }

  .message-error {
    color: red;
    font-size: 12px;
  }
  .message-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
