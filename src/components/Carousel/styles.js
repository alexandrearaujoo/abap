import styled from "styled-components";

export const StyledImg = styled.img`
  width: 80%;
  height: 400px;
  object-fit: cover;
  border: none;
  border-radius: 5px;
  transition: 0.5s;
  animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes slide-left {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(-100px);
      transform: translateX(-100px);
    }
  }
`;
