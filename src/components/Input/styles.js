import styled from 'styled-components'

export const Inputs = styled.div`
    
    border-bottom: 1px var(--purple-1) solid;
    position: relative;


    input{
        background: transparent;
        border: none;
        box-shadow: none;
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
        color: var(--white);
    }

    input:focus + label{
        margin-top: -10px;
        font-size: 10px;
        color:var(--purple-1);
        transition: .2s;
}

    input:not(:placeholder-shown) + label{
            margin-top: -10px;
            font-size: 10px;
            color:var(--purple-1);
            transition: .2s;
    }




   


   



`