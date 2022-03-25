import { BiLogIn } from "react-icons/bi";
import Slider from "../../components/Carousel";
import Header from "../../components/Header";
import { Main, StyledFigure, DivNoticias } from "./styles";
import { Carousel } from "3d-react-carousal";

const Homepage = () => {
  let slides = [
    <DivNoticias>
      <h2>Missão</h2>
      <p>
        Atuar com responsabilidade sócio-ambiental, no sistema de abastecimento
        de água, assegurando o abastecimento de água potável de poço artesiano,
        nos padrões de qualidade e a menores custos.
      </p>
    </DivNoticias>,
    <DivNoticias>
      <h2>Valores</h2>
      <ul>
        <p>Sustentabilidade</p>
        <p>Responsabilidade Social</p>
        <p>Ética</p>
        <p>Transparência</p>
        <p>Segurança</p>
      </ul>
    </DivNoticias>,
    <DivNoticias>
      <h2>Objetivos</h2>
      <p>
        Manter a cobertura de água à comunidade da Palma com a utilização do
        sistema de poço artesiano de modo sustentável e com a garantia da
        satisfação das necessidades dos usuários através do incentivo ao uso
        consciente
      </p>
    </DivNoticias>,
  ];

  return (
    <>
      <Header icon={<BiLogIn />} text="Area do associado" link="/login" />
      <Main>
        <StyledFigure>
          <Slider />
        </StyledFigure>

        <article>
          <Carousel
            slides={slides}
            autoplay={true}
            interval={4000}
            style={{width: '100%'}}
          />
        </article>
      </Main>
    </>
  );
};

export default Homepage;
