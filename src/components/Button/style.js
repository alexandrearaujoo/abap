import styled from 'styled-components'

export const ButtonStyled = styled.button`
    cursor: pointer;
    position: relative;
    padding: 10px 36px;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    border-radius: 40px;
    border: none;
    margin-top: 15px;

    span {
    position: relative;
    color: #fff;
    font-family: Arial;
    letter-spacing: 8px;
    z-index: 1;
   }
    div {
    position: absolute;
    top: -80px;
    left: 0;
    width: 100%;
    height: 200px;
    background: var(--color-primary-50);
    box-shadow: inset 0 0 50px rgba(0, 0, 0, .5);
    transition: .5s;

    ::after, ::before{
        content: '';
        width: 200%;
        height: 200%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -75%);
        background: #fff;
    }

        ::before {
            border-radius: 45%;
            background: rgba(20, 20, 20, 1);
            animation: animate 5s linear infinite;
        }

        ::after {
            border-radius: 40%;
            background: rgba(20, 20, 20, .5);
            animation: animate 10s linear infinite;
        }

        :hover {
           top: -120px; 
        }
   }

   @keyframes animate {
    0% {
     transform: translate(-50%, -75%) rotate(0deg);
    }
   
    100% {
     transform: translate(-50%, -75%) rotate(360deg);
    }
   }

`