import { Inputs } from "./styles";

const InputDefault = ({ label, width = '50%', ...rest }) => {
  return (
    <Inputs radius={rest.radius} width={width} bordercolor={rest.bordercolor} backgrd={rest.backgrd}>
    
      <input {...rest} placeholder=" "></input>

      <label>{label}</label>
    </Inputs>
  );
};

export default InputDefault;
