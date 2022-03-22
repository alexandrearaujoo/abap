import { Inputs } from "./styles";

const Input = ({ label, name, error, register, bordercolor, onChange, ...rest }) => {

  return (
    <Inputs isErrored={!!error} bordercolor={bordercolor}>
      <input autoComplete="off" {...register(name)} {...rest} placeholder=" " onChange={onChange}></input>
      {error ? <label>{error}</label> : <label>{label}</label>}
    </Inputs>
  );
};

export default Input;
