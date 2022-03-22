import ButtonAdd from "../ButtonAdd";
import { MdPersonAdd } from "react-icons/md";
import { Container, DivBusca, FormOptions } from "./style";
import InputDefault from "../InputDefault";
import {FaSearch} from 'react-icons/fa' 


const Busca = ({ ...rest }) => {

  // armazena o que foi digitado pelo usuario
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
                  background='var(--color-secondary)'
                  heigth="30px"
                  radius="0 5px 5px 0;"
                  
                ></ButtonAdd>
          </section>
          
          <FormOptions>
                <select value={rest.status} onChange={rest.changeStatus}>
                <option selected disabled>Status</option>
                  <option value="todos">Todos</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                </select>

                <ButtonAdd
                  icon={MdPersonAdd}
                  onClick={rest.handleClick}
                  background='var(--color-secondary)'
                  heigth="30px"
                  radius="5px"
                  type='button'
                ></ButtonAdd>
          </FormOptions>      
       </form>
      </DivBusca>
    </Container>
  );
};
export default Busca;



//COPIAR PARA A PAGE QUE UTILIZARA A BUSCA
// const [showForm, setShowForm] = useState(false);
// const [showInfos, setShowInfos] = useState(false)
// const {associados, infosUser, infoUser} = useAssociados()
// const [busca, setBusca] = useState("") // Armazena dados da busca
// const [arrayBusca, setArrayBusca] = useState ([])
// const [status, setStatus] = useState ("")

// let array = ARRAY COM DADOS DA API



// // Exibe o Formulario de cadastro associado
// const handleClick = () => {
//   setShowForm(!showForm);
// };

// const onSubmit = (e) => {
//   e.preventDefault()
//   const filter = (associados.filter((associado)=>associado.name.toLocaleLowerCase().includes(busca.toLocaleLowerCase().trim())))
//   setArrayBusca(filter)
//   setBusca("")
//   filter.length < 1 && toast.error("Não encontrei nenhuma referência!"); 
// }


// const changeStatus = (e) =>{
//   setStatus(e.target.value)
//   let status = e.target.value
//   status === 'Status...' || status === 'todos' ? setArrayBusca(associados) : 
//   setArrayBusca(associados.filter((associado)=>associado.status === status))

// }

// arrayBusca.length > 1 ? array = arrayBusca : status ? array = arrayBusca : array = associados

// const handleShowInfos = () => setShowInfos(!showInfos)

// const handleInfoUser = (id) => {
//   infosUser(id)
// }

  
  
