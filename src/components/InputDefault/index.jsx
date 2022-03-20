import { Inputs } from "./styles";

const InputDefault = ({ label, ...rest }) => {
  return (
    <Inputs radius={rest.radius}>
      <input {...rest} placeholder=" "></input>

      <label>{label}</label>
    </Inputs>
  );
};

export default InputDefault;
