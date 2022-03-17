import styled from 'styled-components'

export const Inputs = styled.div`
    
    border: 1px var(--color-secondary) solid;
    border-radius: 3px;
    position: relative;
    height: 30px;
    width: 200px;


    input{
        background: transparent;
        border: none;
        box-shadow: 0 0 0 0;
        outline: 0;
        color: var(--black);
    }
 

    textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    } 

 
    label{
        pointer-events: none;
        position: absolute;
        margin-left: -82%;
        margin-top: 7px;
        font-size: 15px;
        color: var(--purple-1);
    }

    input:focus + label{
        margin-top: -12px;
        font-size: 10px;
        color:var(--color-secondary);
        transition: .2s;
}

    input:not(:placeholder-shown) + label{
            margin-top: -12px;
            font-size: 10px;
            color:var(--color-secondary);
            transition: .2s;
    }


`

