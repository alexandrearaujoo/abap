
import { Container } from "./style"


 const Lista = ({...rest}) => {


    return(
        <Container>

                <div className="info1">{rest.info1}</div>
                <div className="info2">{rest.info2}</div>
                <div className="info3">{rest.info3}</div>
                <div className="info4">{rest.info4}</div>
            
        </Container>


    )
 }

 export default Lista