import ButtonAdd from "../ButtonAdd"
import {MdPersonAdd} from 'react-icons/md'
import { Container, DivBusca } from "./style"
import InputDefault from "../InputDefault"

const Busca = ({...rest}) => {

    return(
        <Container>
            <DivBusca>
            <InputDefault label="Teste"/>


                <select>
                    <option selected disabled>Status...</option>
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                    <option value="Debitos">Debitos</option>
                </select>

                <ButtonAdd icon={MdPersonAdd} 
                onClick={rest.handleClick}
                background="#4A5292" 
                heigth="30px"
                ></ButtonAdd>
            </DivBusca>    
        </Container>

    )


}
export default Busca