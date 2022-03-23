import {
  Container,
  Button,
  SidebarContainer,
  SlickBar,
  Item,
  Text,
  Profile,
  Details,
  Logout,
  Name,
} from "./style";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { MdAttachMoney } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { BsUpcScan } from "react-icons/bs";
import { AiOutlineHome, AiOutlinePoweroff } from "react-icons/ai";

const SidebarAssociado = ({ click, setClick }) => {
  const history = useHistory();

  const [profileClick, setprofileClick] = useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);


  const logout = () => {
    // localStorage.clear()
    history.push("/")
  }

  return (
    <>
      <Container>
        <SlickBar clicked={click}>
          <Item
            onClick={() => {
              setClick(false);
              history.push("/dashboardAssociado");
            }}
            activeClassName="active"
          >
            <AiOutlineHome size={40} />
            <Text clicked={click}>Home</Text>
          </Item>
          <Item
            onClick={() => {
              setClick(false);
              history.push("/historicoPagamentos");
            }}
            activeClassName="active"
          >
            <MdAttachMoney size={40} />
            <Text clicked={click}>Faturas</Text>
          </Item>
          <Item
            onClick={() => {
              setClick(false);
              history.push("/solicitacaoAssociado");
            }}
            activeClassName="active"
          >
            <BiPhoneCall size={40} />
            <Text clicked={click}>Solicitações</Text>
          </Item>
          <Item
            onClick={() => {
              setClick(false);
              history.push("/leitura");
            }}
            activeClassName="active"
          >
            <BsUpcScan size={40} />
            <Text clicked={click}>Autoleitura</Text>
          </Item>
          <Item
            onClick={() => logout()}
            activeClassName="active"
          >
            <AiOutlinePoweroff size={40} />
            <Text clicked={click}>Sair</Text>
          </Item>
        </SlickBar>
      </Container> 
    </>
  );
};

export default SidebarAssociado;

//
