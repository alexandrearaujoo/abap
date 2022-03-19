import { Container } from "./style";
const Lista = ({ backgroundColor = "#008000", ...rest }) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <>{rest.info1}</>
      <>{rest.info2}</>
      <>{rest.info3}</>
      <>{rest.info4}</>
    </Container>
  );
};
export default Lista;
