import { Container } from "./styles";

const DivLista = ({ children, ...rest }) => {
  return (
    <Container>
      <aside>
        <span>{rest.title1}</span>
        <span>{rest.title2}</span>
        <span>{rest.title3}</span>
        <span>{rest.title4}</span>
      </aside>
      <ul>{children}</ul>
    </Container>
  );
};

export default DivLista;
