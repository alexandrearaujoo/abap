import { Inputs } from "./styles";

const InputDefault = ({ label, ...rest }) => {
  return (
    <Inputs>
      <input {...rest} placeholder=" "></input>

      <label>{label}</label>

      {/* <label>{error === 'Campo Obrigatorio' ? label={error} : label={label}}</label>  */}
      {/* <label>{label} {!!error && <span> - {error}</span>}</label>  */}
    </Inputs>
  );
};

export default InputDefault;
