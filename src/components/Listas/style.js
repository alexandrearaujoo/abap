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

  div {
    background-color: #c4c4c4;
    box-shadow: inset -2px -1px 6px -1px rgba(255, 255, 255, 1);
    width: 15px;
    height: 15px;
    border-radius: 3px;
  }
`;
