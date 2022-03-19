import Sidebar from "../../components/Sidebar"
import MotionDiv from "../../components/MotionDiv"
import {Container} from './style'
import DivLista from "../../components/DivLista"
import Lista from "../../components/Listas"
import FormModalAssociados from '../../components/FormModalAssociados'
import {useState} from 'react'
import {MdPersonAdd} from 'react-icons/md'
import {BsInfoSquare} from 'react-icons/bs'
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
            {/* <h2>Cadastrar Associados</h2> */}
            {showForm && <FormModalAssociados />}
            <DivLista>
                <div>
                 <ButtonAdd icon={MdPersonAdd} 
                onClick={handleClick}
                background="#839EAC"
                heigth="20px"
                ></ButtonAdd>
                <select>
                    <option selected disabled>Status...</option>
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                </select>
                </div>
                {array.map((itens) => 
                <Lista 
                  info1={<span>{itens.nome}</span>}
                  info2={<div></div>}
                  info3={'Devedor'}
                  info4={<ButtonAdd icon={BsInfoSquare}></ButtonAdd>}
                />
                )}
            </DivLista>
            
            </MotionDiv>
            
            </Container>
        </>
    )
}

export default Associados