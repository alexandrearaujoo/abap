import Sidebar from "../../components/Sidebar"
import MotionDiv from "../../components/MotionDiv"
import WaveAdm from "../../components/WaveAdm"
import {Container, List} from './style'

const Solicitacoes = () => {
    return (
<>
        <Sidebar />
        
            <Container>
            <MotionDiv>
                <h2>Solicitações</h2>

                <List>
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
                </List>
                </MotionDiv>
            </Container>
                
            <WaveAdm />
        </>
    )
}

export default Solicitacoes