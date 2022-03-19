import { ButtonStyled } from "./style";

const Button = ({
  children,
  margin = "15px",
  padding = "5px 30px",
  ...rest
}) => {
  return (
    <ButtonStyled margin={margin} padding={padding} {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
