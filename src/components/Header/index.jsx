import { useHistory } from "react-router-dom";

import { StyledContainer } from "../../style/global";
import { StyledHeader } from "./styles";

import Logo from "../../assets/img/logo.png";

const Header = ({text, link}) => {
  const history = useHistory();

  const handleLogin = () => {
    history.push(`${link}`);
  };

  return (
    <StyledHeader>
      <StyledContainer>
        <img width={40} src={Logo} alt="Logo" />
        <button onClick={handleLogin}>{text}</button>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
