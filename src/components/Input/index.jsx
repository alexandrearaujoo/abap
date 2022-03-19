import { Inputs } from "./styles"

const Input = ({label, name, error, register, ...rest}) => {
    return (
        <>
            <Inputs isErrored={!!error}>             
                <input {...register(name)} {...rest}></input>  
                <label>{label} {!!error && <span> - {error}</span>}</label>        
            </Inputs>
        </>
    )

}

export default Input