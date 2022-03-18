import Sidebar from "../../components/Sidebar"
import MotionDiv from "../../components/MotionDiv"
import WaveAdm from "../../components/WaveAdm"
import {Container, List} from './style'
import FormModalAssociados from "../../components/FormModalAssociados"
import Input from "../../components/Input"

const Solicitacoes = () => {
    return (
<>
        <Sidebar />
        
            <Container>
            <MotionDiv>
                <h2>Solicitações</h2>
                <FormModalAssociados/>


                {/* <List>
                    <li>
                        teste
                    </li>
                    <li>
                        teste
                    </li>
                    <li>
                        teste
                    </li>
                    <li>
                        teste
                    </li>
                </List> */}
                </MotionDiv>
            </Container>
                
            <WaveAdm />
        </>
    )
}

export default Solicitacoes