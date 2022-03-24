import Header from "../../components/Header";
import {AiOutlineMenu} from "react-icons/ai"
import Main from "../../components/Main";
import SidebarAssociado from "../../components/SidebarAssociado";
import { StyledSection, DivNoticias } from "./styles";
import {Carousel} from '3d-react-carousal';

const DashboardAssociado = () => {

  const user = JSON.parse(localStorage.getItem("ARAP:User:"))
  let slides = [
    <DivNoticias>
      <h3>Data de leitura</h3>
      <p>do dia 05 até dia 10</p>
    </DivNoticias>,
    <DivNoticias>
    <h3>Titulo 2</h3>
    <p>Notícia 2</p>
  </DivNoticias>,
     <DivNoticias>
     <h3>Titulo 2</h3>
     <p>Notícia 3</p>
   </DivNoticias>]

  return (
    <div>
      <Header icon={<AiOutlineMenu />} user="associado" />
      <SidebarAssociado />
      <Main>
        <StyledSection>
        <h2>Bem-vindo, {user.name}</h2>

          <article>
            <p>Membro desde: <span>{user.createdAt.slice(0,10).split('-').reverse().join('/')}</span></p>
            <p>Estado: <span>{user.estado}</span></p>
            <p>Cidade: <span>{user.cidade}</span></p>
            <p>Bairro: <span>{user.bairro}</span></p>
            <p>Endereço: <span>{user.endereco}</span></p>
          </article>

          <h3>Notícias</h3>
          <Carousel slides={slides} autoplay={true} interval={4000} style={{width: '100%'}}/>
        </StyledSection>
      </Main>
    </div>
  )
}

export default DashboardAssociado;