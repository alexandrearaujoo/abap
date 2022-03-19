import { useHistory } from "react-router-dom";
import { useState } from "react";
import Button from "../Button";
import { StyledContainer } from "../../style/global";
import { StyledHeader } from "./styles";

import Logo from "../../assets/svg/logo-full-size.png";
import Sidebar from "../Sidebar";

const Header = ({ icon, text, link = "" }) => {
  const history = useHistory();
  const [click, setClick] = useState(false);

  const handleClick = () => {
    if (link !== "") {
      history.push(link);
    } else {
      setClick(!click);
    }
  };

  return (
    <StyledHeader>
      <Sidebar click={click} setClick={setClick} />
      <StyledContainer>
        <img width={40} src={Logo} alt="Logo" />
        <Button type="button" onClick={handleClick} margin="0px" padding="5px">
          {icon}
          {text}
        </Button>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
