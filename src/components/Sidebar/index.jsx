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

import { AiOutlineHome } from "react-icons/ai";
import { RiGroupLine } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";
import { CgPerformance } from "react-icons/cg";
import { BiPhoneCall } from "react-icons/bi";

const Sidebar = ({ click, setClick }) => {
  const history = useHistory();

  const [profileClick, setprofileClick] = useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);

  return (
    <>
      <Container>
        <SlickBar clicked={click}>
          <Item
            onClick={() => {
              setClick(false);
              history.push("/dashboardAdm");
            }}
            activeClassName="active"
          >
            <AiOutlineHome size={40} />
            <Text clicked={click}>Página Inicial</Text>
          </Item>
          <Item
            onClick={() => {
              setClick(false);
              history.push("/associados");
            }}
            activeClassName="active"
          >
            <RiGroupLine size={40}/>
            <Text clicked={click}>Associados</Text>
          </Item>
          <Item
            onClick={() => {
              history.push("/gerenciamento");
            }}
            activeClassName="active"
          >
            <MdAttachMoney size={40} />
            <Text clicked={click}>Gerenciar Pagamentos</Text>
          </Item>
          <Item
            onClick={() => {
              setClick(false);
              history.push("/solicitacoesAdm");
            }}
            activeClassName="active"
          >
            <BiPhoneCall size={40} />
            <Text clicked={click}>Solicitações</Text>
          </Item>
          <Item
            onClick={() => {
              setClick(false);
              history.push("/cadastros");
            }}
            activeClassName="active"
          >
            <CgPerformance size={40} />
            <Text clicked={click}>Medidores</Text>
          </Item>
        </SlickBar>
      </Container>
    </>
  );
};

export default Sidebar;
