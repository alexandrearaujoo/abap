import styled from 'styled-components'

export const Inputs = styled.div`
    
    border: 2px solid var(--color-secondary);
    border-radius: 3px;
    position: relative;
    height: 30px;
    width: 40%;
    border-radius: 15px;

   
    
   

    input{
        background: transparent;
        border: none;
        box-shadow: 0 0 0 0;
        outline: 0;
        color: var(--black);
        width: 90%;
        height: 95%;
        font-size: 15px;
        
    }
 
    textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    } 
      
 
    label{
        pointer-events: none;
        position: absolute;
        margin-top: 5px;
        margin-left: -90%;
        font-size: 15px;
        color: var(--black);
     
    }
    input:focus + label{
        margin-top: -32px;
        padding-left: 3px;
        padding-right: 3px;
        background: var(--color-secondary);
        font-size: 10px;
        transition: .2s;
}
    input:not(:placeholder-shown) + label{
            margin-top: -32px;
            background: var(--color-secondary);
            padding-left: 3px;
            padding-right: 3px;
            font-size: 10px;
            transition: .2s;
    }
    
`

