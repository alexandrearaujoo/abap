import Header from "../../components/Header";
import {AiOutlineMenu} from "react-icons/ai"
import Main from "../../components/Main";
import SidebarAssociado from "../../components/SidebarAssociado";
import { StyledSectionNews } from "./styles";

const DashboardAssociado = () => {
  return (
    <div>
      <Header icon={<AiOutlineMenu />} user="associado" />
      <SidebarAssociado />
      <Main>
        <h2>Bem-vindo, @Usuário!</h2>
        <section>

          <article>
            <p>Membro desde: <span>xx/xx/xxxx</span></p>
            <p>CPF: <span>xxx.xxx.xxx-xx</span></p>
            <p>Data de Leitura: <span>xx/xx/xxxx</span></p>
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

        </section>
      </Main>
    </div>
  )
}

export default DashboardAssociado;