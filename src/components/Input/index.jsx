import { Inputs } from "./styles"

const Input = ({label='Teste',...rest}) => {
    

    

    return (
        <>
            <Inputs>
                 
                <input {...rest} placeholder=' '></input>  
                <label>{label}</label>
            
            
            </Inputs>
        </>


    )


}

export default Input