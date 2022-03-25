import { StyledContainer } from "../../style/global";
import { StyledMain } from "./styles";

const Main = ({ flex, children }) => {
  return (
    <StyledMain>
      <StyledContainer column flex >{children}</StyledContainer>
    </StyledMain>
  );
};

export default Main;
