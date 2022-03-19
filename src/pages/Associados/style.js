import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    background-color: var(--color-primary);
  
  

    h2{
        text-align: center;
        color: var(--white);
    }
`

export const List = styled.ul`
    width: 100%;
    max-height: 400px;
    position: relative;
    z-index: 1;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    background-color: var(--background-menus);
    border-radius: 15px;
    box-shadow: 3px 3px 10px -2px rgba(0, 0, 0, 1);

    ::-webkit-scrollbar {
             display: none;
            }

    li {      
        width: 80%;
        display: flex;
        justify-content: space-between;
        margin: 8px auto;
        background-color: var(--purple-1);
        border-radius: 3px;
        padding: 5px;
        box-shadow: 3px 3px 10px -2px rgba(0, 0, 0, 0.50);

        div{ 
            background-color: red;
            width: 25px;
            height: 25px;
            border-radius:50%;
            box-shadow: 3px 3px 10px -2px rgba(0, 0, 0, 0.50);
        }

    }
`