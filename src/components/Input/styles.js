import styled,{css}from 'styled-components'

export const Inputs = styled.div`
    
    border: 2px solid var(--white);
    border-radius: 3px;
    position: relative;
    height: 30px;
    width: 90%;
    margin-top: 20px;

    ${(props) =>
            props.isErrored &&
            css`
            border-color: #ff0000;
        `}


    input{
        background: transparent;
        border: none;
        box-shadow: 0 0 0 0;
        outline: 0;
        color: var(--black);
        width: 100%;
        height: 100%;
    }
 

    textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    } 

 
    label{
        pointer-events: none;
        position: absolute;
        /* margin-left: -82px; */
        /* margin-top: 7px; */
        margin-top: -23px;
        margin-left: 3px;
        font-size: 15px;
        color: var(--white);

        span {
            ${(props) =>
            props.isErrored &&
            css`
            color: #ff0000;
        `}
        }
    }

    input:focus + label{
        margin-top: -37px;
        padding-left: 2px;
        padding-right: 2px;
        background: var(--color-primary);
        font-size: 10px;
        transition: .2s;

}

    input:not(:placeholder-shown) + label{
            margin-top: -37px;
            background: var(--color-secondary);
            padding: 3px;
            font-size: 10px;
            transition: .2s;
    }


`

