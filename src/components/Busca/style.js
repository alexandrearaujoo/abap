import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    background-color: var(--color-secondary);
    border-radius: 3px;
    /* padding: 5px; */
    box-shadow: 3px 3px 10px -2px rgba(0, 0, 0, 0.50);
    align-items: center;
    justify-content: center;

       


` 

export const DivBusca = styled.div`

            width: 90%;
            height: 45px;
            display: flex;
            justify-content: space-between;
            
            align-items: center;
            background-color: var(--white);
            border-radius: 3px;
            padding: 5px;


        select{
            background-color: var(--color-secondary);
            color: var(--white);
            height: 30px;
            border-radius: 5px;
        }


`