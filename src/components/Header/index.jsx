import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { StyledContainer } from "../../style/global";
import { StyledHeader } from "./styles";

import Logo from "../../assets/svg/logo.svg";

const Header = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };

  return (
    <StyledHeader>
      <StyledContainer>
        <img width={40} src={Logo} alt="Logo" />
        <button onClick={handleLogin}>Login</button>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
