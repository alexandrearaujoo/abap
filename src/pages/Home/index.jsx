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
            <p>Aqui deverá constar texto da missão da associação.</p>
          </section>

          <section>
            <h2>Valores</h2>
            <p>Aqui deverá conter texto dos valores que a associação poussi.</p>
          </section>

          <section>
            <h2>Objetivos</h2>
            <p>Aqui deverá conter alguns dos objetivos que a associação tem.</p>
          </section>
        </article>
      </Main>
    </>
  );
};

export default Homepage;
