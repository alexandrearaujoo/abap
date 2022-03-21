import { Container } from "./style";

const ButtonAdd = ({
  icon: Icon,
  background = "transparent",
  color = "var(--white)",
  heigth = "35px",
  width = "35px",
  children,
  radius = '',
  marginBottom = "0px",
  ...rest
}) => {
  return (
    <Container
      {...rest}
      background={background}
      color={color}
      heigth={heigth}
      width={width}
      marginBottom={marginBottom}
      radius={radius}
      type={rest.type}
    >
      <Icon />
      {children}
    </Container>
  );
};

export default ButtonAdd;
