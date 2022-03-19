import { Container } from "./styles"


const DivLista = ({children, ...rest}) => {

    return(
        <Container> 
            <div>
            <span>{rest.title1}</span>
            <span>{rest.title2}</span>
            <span>{rest.title3}</span>
            <span>{rest.title4}</span>
            </div>
            {children}
        </Container>
    )

}

export default DivLista