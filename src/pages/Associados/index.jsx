import Sidebar from "../../components/Sidebar"
import MotionDiv from "../../components/MotionDiv"
import {Container, List} from './style'
import WaveAdm from "../../components/WaveAdm"
import DivLista from "../../components/DivLista"
import Input from '../../components/Input'
import Lista from "../../components/Listas"

const array = [{nome:'hamart'}, {nome:'david'}, {nome:'jean'}]

const Associados = () => {
    return (
        <>
        <Sidebar />
            <Container>
            
            <MotionDiv>
                <DivLista>

                {array.map((item) => <Lista info1={item.nome} info2={<input type='checkbox'></input>} info3={'david'} info4={'wagner'}/>)
        }
                  
                </DivLista>
            
                
            
                
                </MotionDiv>

                
            </Container>

            <WaveAdm />
        </>
    )
}

export default Associados