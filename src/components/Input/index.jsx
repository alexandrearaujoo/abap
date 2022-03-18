import { Inputs } from "./styles"

const Input = ({label, name, error, register, ...rest}) => {
    console.log(error)
    return (
    
            <Inputs isErrored={!!error}>          
                <input {...register(name)} {...rest} placeholder=' '></input> 
                {
                    error ? ( <label>{error}</label> ) : ( <label>{label}</label> )
                }
               
                {/* <label>{error === 'Campo Obrigatorio' ? label={error} : label={label}}</label>  */}
                {/* <label>{label} {!!error && <span> - {error}</span>}</label>  */}
            </Inputs>
    
    )

}

export default Input