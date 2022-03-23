import Header from "../../components/Header";
import {AiOutlineMenu} from "react-icons/ai"
import Main from "../../components/Main";
import SidebarAssociado from "../../components/SidebarAssociado";
import { StyledSection, StyledSectionNews } from "./styles";

import { useAssociados } from "../../providers/Associados";

const DashboardAssociado = () => {

  const user = JSON.parse(localStorage.getItem("ARAP:User:"))

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const data = new Date(user.createdAt).toLocaleDateString("pt-BR", options)

  return (
    <div>
      <Header icon={<AiOutlineMenu />} text="" user="associado" />
      <SidebarAssociado />
      <Main>
        <StyledSection>
        <h2>Bem-vindo, {user.name}</h2>

          <article>
            <p>Membro desde: <span>{data}</span></p>
            <p>Estado: <span>{user.estado}</span></p>
            <p>Cidade: <span>{user.cidade}</span></p>
            <p>Bairro: <span>{user.bairro}</span></p>
            <p>E-mail: <span>{user.email}</span></p>
            <p>Endereço: <span>{user.endereco}, Nº {user.numero}</span></p>
          </article>

          <h3>Notícias</h3>
          <StyledSectionNews>
            <div>
              <h3>Data de leitura</h3>
              <p>do dia 05 até dia 10</p>
            </div>
            <div>
              <h3>Titulo 2</h3>
              <p>Notícia 2</p>
            </div>
            <div>
              <h3>Titulo 2</h3>
              <p>Notícia 3</p>
            </div>
          </StyledSectionNews>

        </StyledSection>
      </Main>
    </div>
  )
}

export default DashboardAssociado;