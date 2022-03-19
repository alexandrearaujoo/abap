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
        align-items: center;

        span {
            width: 43%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        div {
            background-color: ${props => props.backgroundColor};
            box-shadow: inset -2px -1px 6px -1px rgba(255, 255, 255, 1);
            width: 15px;
            height: 15px;
            border-radius: 50%;
        }

`