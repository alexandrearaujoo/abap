import { Container } from "./style";
const Lista = ({...rest }) => {
  return (
    <Container>
      <>{rest.info1}</>
      <>{rest.info2}</>
      <>{rest.info3}</>
      <>{rest.info4}</>
    </Container>
  );
};
export default Lista;
