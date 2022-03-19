import Sidebar from "../../components/Sidebar"
import MotionDiv from "../../components/MotionDiv"
import {Container, List} from './style'
import ButtonAdd from "../../components/ButtonAdd"
import {AiOutlinePlus} from 'react-icons/ai'
import DivLista from "../../components/DivLista"
import Lista from "../../components/Listas"
import FormModalMedidor from "../../components/FormModalMedidor"
import { useState } from "react"

const array = [{codigo:'1234'}, {codigo:'1235'}]

const CadastroAssociados = () => {
    const [showForm, setShowForm] = useState(false)

    const handleClick = () => {
        setShowForm(!showForm)
    }

    return (
        <>
        <Sidebar />
        
            <Container>
            <MotionDiv>
                <h2>Cadastrar Medidor</h2>
                {showForm && <FormModalMedidor />}
                <ButtonAdd icon={AiOutlinePlus} 
                    onClick={handleClick}
                    background="#839EAC"
                    heigth="20px"
                    width="100px"
                >Adicionar</ButtonAdd>
            <DivLista title1='Código' title2='Status' >
                {array.map((item, index) => 
                <Lista 
                  key={index}
                  info1={<span>{item.codigo}</span>}
                  info2={<input type='checkbox'></input>}
                />
                )}
            </DivLista>
                </MotionDiv>
            </Container>
        
        </>
    )
}

export default CadastroAssociados