import { Inputs } from "./styles";

const Input = ({ label, name, error, register, bordercolor, onChange, ...rest }) => {
  return (
    <Inputs isErrored={!!error} bordercolor={bordercolor}>

      {
        onChange
        ? <input  {...register(name)} {...rest} placeholder=" " onChange={onChange} autoComplete="off"></input>
        : <input  {...register(name)} {...rest} placeholder=" " autoComplete="off"></input>
      }
     

      {error ? <label>{error}</label> : <label>{label}</label>}
    </Inputs>
  );
};

export default Input;
