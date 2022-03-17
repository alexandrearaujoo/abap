import Sidebar from "../../components/Sidebar"
import MotionDiv from "../../components/MotionDiv"
import {Container, List} from './style'
import WaveAdm from "../../components/WaveAdm"

const Associados = () => {
    return (
        <>
        <Sidebar />
            <Container>
            
            <MotionDiv>
                <h2>Associados</h2>

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

export default Associados