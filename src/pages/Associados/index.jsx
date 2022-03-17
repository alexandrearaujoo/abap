import Sidebar from "../../components/Sidebar"
import MotionDiv from "../../components/MotionDiv"
import {Container} from './style'
import WaveAdm from "../../components/WaveAdm"
import DivLista from "../../components/DivLista"
import Lista from "../../components/Listas"

const array = [{nome:'hamart shusssssssssss'}, {nome:'david'}, {nome:'jean'}, {nome:'jean'}, {nome:'jean'}, {nome:'jean'}, {nome:'jean'}, {nome:'jean'}, {nome:'jean'}, {nome:'jean'}, {nome:'jean'}, {nome:'jean'}, {nome:'jean'}, {nome:'jean'}]

const Associados = () => {
    return (
        <>
        <Sidebar />
            <Container> 
            <MotionDiv>    
            <h2>Cadastrar Associados</h2>

            <DivLista title1='Nome'title2='Status' title3='Debitos'>
                {array.map((itens) => 
                <Lista 
                  info1={<span>{itens.nome}</span>}
                  info2={<input type='checkbox'></input>}
                  info3={'Devedor'}
                  info4={'x'}
                />
                )}
            </DivLista>

            </MotionDiv>
            </Container>
            <WaveAdm />
        </>
    )
}

export default Associados