import styled from "styled-components"

export const StyledImg = styled.img`
  width: 80%;
  height: 400px;
  object-fit: cover;
  border: none;
  border-radius: 5px;
  transition: .5s;
  animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

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

`