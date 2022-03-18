import { Container } from "./style";

const ButtonAdd = ({ icon: Icon, background = "transparent", color = '#000',heigth = '35px',width = '35px',children, ...rest }) => {

    return (
      <Container {...rest} background={background} color={color} heigth={heigth} width={width}>
        <Icon />
        {children}
      </Container>
    );
  };

export default ButtonAdd    