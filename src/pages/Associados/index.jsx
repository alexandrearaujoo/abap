import Sidebar from "../../components/Sidebar"
import MotionDiv from "../../components/MotionDiv"
import {Container} from './style'
import DivLista from "../../components/DivLista"
import Lista from "../../components/Listas"
import FormModalAssociados from '../../components/FormModalAssociados'
import {useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import ButtonAdd from "../../components/ButtonAdd"

const array = [{nome:'hamart shusssssssssss'}, {nome:'david'}, {nome:'jean'}, {nome:'jean'}, {nome:'jean'}, {nome:'jean'}, {nome:'jean'}, {nome:'jean'}, {nome:'jean'}, {nome:'jean'}, {nome:'jean'}, {nome:'jean'}, {nome:'jean'}, {nome:'jean'}]

const Associados = () => {

    const [showForm, setShowForm] = useState(false)

    const handleClick = () => {
        setShowForm(!showForm)
    }

    return (
        <>
        <Sidebar />
            <Container> 
            <MotionDiv>    
            <h2>Cadastrar Associados</h2>
            {showForm && <FormModalAssociados />}
            <ButtonAdd icon={AiOutlinePlus} 
            onClick={handleClick}
             background="#839EAC"
            heigth="20px"
            width="100px"
             >Adicionar</ButtonAdd>
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
        </>
    )
}

export default Associados