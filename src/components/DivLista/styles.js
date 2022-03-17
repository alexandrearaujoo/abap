import styled from "styled-components";

export const Container = styled.ul`
    width: 100%;
    max-height: 400px;
    position: relative;
    z-index: 1;
    overflow-y: scroll;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--background-menus);
    border-radius: 15px;
    box-shadow: 3px 3px 10px -2px rgba(0, 0, 0, 1);

    ::-webkit-scrollbar {
             display: none;
    }

    div {
        width: 80%;
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
    }
`