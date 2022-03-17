import styled from 'styled-components'

export const Container = styled.li`
        width: 80%;
        display: flex;
        justify-content: space-between;
        margin: 8px auto;
        background-color: var(--purple-1);
        border-radius: 3px;
        padding: 5px;
        box-shadow: 3px 3px 10px -2px rgba(0, 0, 0, 0.50);


        span {
            max-width: 50%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

`