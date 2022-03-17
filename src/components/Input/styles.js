import styled from 'styled-components'

export const Inputs = styled.div`
    
    border: 1px red solid;
    border-radius: 3px;
    position: relative;
    height: 30px;
    width: 200px;
    margin-top: 20px;


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
        color: red;
    }

    input:focus + label{
        margin-top: -37px;
        padding-left: 2px;
        padding-right: 2px;
        background: var(--color-primary);
        font-size: 10px;
        color:red;
        transition: .2s;

}

    input:not(:placeholder-shown) + label{
            margin-top: -37px;
            background: var(--color-primary);
            padding-left: 2px;
            padding-right: 2px;
            font-size: 10px;
            color: red;
            transition: .2s;
    }


`

