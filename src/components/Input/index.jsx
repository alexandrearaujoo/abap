import { Inputs } from "./styles"

const Input = ({label, name, error, register, ...rest}) => {

    return (
            <Inputs>

            <input {...register(name)} {...rest} placeholder=' '></input> 
                {
                    error ? ( <label>{error}</label> ) : ( <label>{label}</label> )
                }        
            
            </Inputs>

    )


}

export default Input