import Lista from "../Listas"
import { Container } from "./styles"


const DivLista = ({children, ...rest}) => {






    return(
        <Container> 
            <div>{rest.title1}{rest.title2}</div>

            {children}
        </Container>
        

    )

}

export default DivLista