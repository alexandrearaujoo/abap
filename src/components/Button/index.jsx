import { ButtonStyled } from "./style";

const Button = ({
  children,
  margin = "15px",
  padding = "5px 30px",
  width = '90%',
  backgroundColor,
  ...rest
}) => {
  return (
    <ButtonStyled width={width} backgroundColor={backgroundColor} margin={margin} padding={padding} {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
