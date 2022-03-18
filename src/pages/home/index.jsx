import Header from "../../components/Header";
import { Main, StyledFigure } from "./styles";
// import { Carousel } from 'bootstrap';



const images = [
  { src: "src/assets/img/pexels-lena-hsvl-933701.jpg"},
  { src: "src/assets/img/pexels-lisa-fotios-734973.jpg"},
  { src: "src/assets/img/pexels-pixabay-327090.jpg"},
  { src: "src/assets/img/pexels-sebastian-voortman-189349.jpg"},
  { src: "src/assets/img/pexels-sourav-mishra-1231622.jpg"},
  { src: "src/assets/img/pexels-tim-mossholder-1439227.jpg"}
]

const Homepage = () => {
  return (
      <>
      <Header />
      
        <Main>

            {/* <Carousel>
              { images.map((image, index) => (
                <div 
                  key={index}
                  className="demo-item"
                  style={{backgroundImage: `"url(${ image.src })` }}
                />
              ))}
            </Carousel> */}

            <StyledFigure>
              <img src="https://www.aquafluxus.com.br/wp-content/uploads/2015/02/agua.png" alt="imagem" />
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
  )
}

export default Homepage;