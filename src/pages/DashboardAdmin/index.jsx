import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { AiOutlineMenu } from "react-icons/ai";
import Main from "../../components/Main";
import { StyledSection, StyledSectionNews } from "./style";


const DashBoardADM = () => {

  const adm = JSON.parse(localStorage.getItem('ARAP:ADM'))

  return (
    <>
      <div>
      <Header icon={<AiOutlineMenu />} user="admin" />
      <Sidebar />
      <Main>
        <StyledSection>
        <h2>Bem-vindo, {adm.name}</h2>

          <article>
            <p>Membro desde: <span>{adm.createdAt.slice(0,10).split('-').reverse().join('/')}</span></p>
            <p>Estado: <span>{adm.estado}</span></p>
            <p>Cidade: <span>{adm.cidade}</span></p>
            <p>Bairro: <span>{adm.bairro}</span></p>
            <p>Endereço: <span>{adm.endereco}</span></p>
          </article>

        </StyledSection>
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

      </Main>
    </div>
    </>
  );
};

export default DashBoardADM;
