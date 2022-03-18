import Sidebar from "../../components/Sidebar"
import MotionDiv from "../../components/MotionDiv"
import WaveAdm from "../../components/WaveAdm"
import {Container, List} from './style'
import Input from "../../components/Input"
import DivLista from "../../components/DivLista"
import Lista from "../../components/Listas"

const GerenciarPagamentos = () => {
    const array = [{},{},{},{}]

    return (
        <>
        <Sidebar />
        
            <Container>
            <MotionDiv>
                <h2>Gerenciar Pagamentos</h2>
                <Input label="Teste"/>

                <DivLista title1={'Nome'} title2={'Pago'}>
                
                  {array.map((item) => <Lista 
                  info1={'xxxx'} 
                  info2={<input type='checkbox'></input>} 
                  info3={'x'} 
                  info4={'x'}/>)}                
                </DivLista>
               

              
                </MotionDiv>
            </Container>
                
            <WaveAdm />
        </>
    )
}

export default GerenciarPagamentos