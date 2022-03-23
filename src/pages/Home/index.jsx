import { BiLogIn } from "react-icons/bi";
import Slider from "../../components/Carousel";
import Header from "../../components/Header";
import { Main, StyledFigure } from "./styles";

const Homepage = () => {
  return (
    <>
      <Header icon={<BiLogIn />} text="Area do associado" link="/login" />
      <Main>
        <StyledFigure>
          <Slider />
        </StyledFigure>

        <article>
          <section>
            <h2>Missão</h2>
            <p>
              Atuar com responsabilidade sócio-ambiental, no sistema de
              abastecimento de água, assegurando o abastecimento de água potável
              de poço artesiano, nos padrões de qualidade e a menores custos,
              contribuindo com a qualidade de vida, saúde e meio-ambiente à
              comunidade da Palma, 8º Distrito da cidade de Santa Maria.
            </p>
          </section>

          <section>
            <h2>Valores</h2>
            <ul>
              <li>Sustentabilidade</li>
              <li>Responsabilidade Social</li>
              <li>Ética</li>
              <li>Transparência</li>
              <li>Segurança</li>
              <li>Eficiência</li>
              <li>Gestão Compartilhada</li>
              <li>Valorização das Pessoas</li>
            </ul>
          </section>

          <section>
            <h2>Objetivos</h2>
            <p>Manter a cobertura de água à comunidade da Palma com a utilização do sistema de poço artesiano de modo sustentável e com a garantia da satisfação das necessidades dos usuários através do incentivo ao uso consciente.</p>
          </section>
        </article>
      </Main>
    </>
  );
};

export default Homepage;
