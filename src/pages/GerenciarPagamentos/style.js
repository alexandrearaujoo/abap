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
    display: flex;
    flex-direction: column;
    background-color: var(--background-menus);
    border-radius: 15px;
    box-shadow: 3px 3px 10px -2px rgba(0, 0, 0, 1);

    li {      
        width: 80%;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-bottom: 15px;
    }

    li + li {
        margin-bottom: 15px;
    }
`