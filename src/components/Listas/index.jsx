import { Container } from "./style";
const Lista = ({...rest }) => {
  return (
    <Container>
      <span>{rest.info1}</span>
      <span>{rest.info2}</span>
      <span>{rest.info3}</span>
      <span>{rest.info4}</span>
    </Container>
  );
};
export default Lista;
