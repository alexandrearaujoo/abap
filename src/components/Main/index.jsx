import { StyledContainer } from "../../style/global";
import { StyledMain } from "./styles";

const Main = ({ children }) => {
  return (
    <StyledMain>
      <StyledContainer column>{children}</StyledContainer>
    </StyledMain>
  );
};

export default Main;
