import ButtonAdd from "../ButtonAdd";
import { MdPersonAdd } from "react-icons/md";
import { Container, DivBusca, FormOptions } from "./style";
import InputDefault from "../InputDefault";
import {FaSearch} from 'react-icons/fa' 


const Busca = ({ ...rest }) => {

  const handleChange = (e) => {
   
    rest.setBusca(e.target.value)
    
  }


  return (
    <Container>
      <DivBusca>
        <form onSubmit={rest.onSubmit}>
          <section>
            <InputDefault label={rest.label}  
                    value={rest.busca}
                    onChange={handleChange}
                    radius="5px 0 0 5px;"
                    />
                <ButtonAdd
                  icon={FaSearch}
                  onClick={''}
                  background='var(--color-secondary)'
                  heigth="30px"
                  radius="0 5px 5px 0;"
                ></ButtonAdd>
          </section>
          
          <FormOptions>
                <select value={rest.status} onChange={rest.changeStatus}>
                  <option defaultValue={"status"}>Status</option>
                  <option value="todos">Todos</option>
                  <option value="ativo">Ativo</option>
                  <option value="inativo">Inativo</option>
                </select>

                <ButtonAdd
                  icon={MdPersonAdd}
                  onClick={rest.handleClick}
                  background='var(--color-secondary)'
                  heigth="30px"
                  radius="5px"
                ></ButtonAdd>
          </FormOptions>      
       </form>
      </DivBusca>
    </Container>
  );
};
export default Busca;
