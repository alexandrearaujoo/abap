import Header from "../../components/Header";
import {AiOutlineMenu} from "react-icons/ai"
import Main from "../../components/Main";
import SidebarAssociado from "../../components/SidebarAssociado";
import { StyledSection, StyledSectionNews } from "./styles";

import { useAssociados } from "../../providers/Associados";

const DashboardAssociado = () => {

  const user = JSON.parse(localStorage.getItem("ARAP:User:"))

  const { infosUser } = useAssociados()
  console.log(infosUser)

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const data = new Date(infosUser.createdAt).toLocaleDateString("pt-BR", options)

  return (
    <div>
      <Header icon={<AiOutlineMenu />} user="associado" />
      <SidebarAssociado />
      <Main>
        <StyledSection>
        <h2>Bem-vindo, {infosUser.name}</h2>

          <article>
            <p>Membro desde: <span>{data}</span></p>
            <p>Estado: <span>{infosUser.estado}</span></p>
            <p>Cidade: <span>{infosUser.cidade}</span></p>
            <p>Bairro: <span>{infosUser.bairro}</span></p>
            <p>E-mail: <span>{infosUser.email}</span></p>
            <p>Endereço: <span>{infosUser.endereco}, Nº {infosUser.numero}</span></p>
          </article>

          <h3>Notícias</h3>
          <StyledSectionNews>
            <div>
              <h3>Titulo 1</h3>
              <p>Noticia 1</p>
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