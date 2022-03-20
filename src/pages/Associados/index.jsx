import Sidebar from "../../components/Sidebar";
import MotionDiv from "../../components/MotionDiv";
import { Container } from "./style";
import DivLista from "../../components/DivLista";
import Lista from "../../components/Listas";
import FormModalAssociados from "../../components/FormModalAssociados";
import Blocker from "../../components/Blocker";
import { useState } from "react";
import Header from "../../components/Header";
import { BsInfoSquare } from "react-icons/bs";
import ButtonAdd from "../../components/ButtonAdd";
import Busca from "../../components/Busca";
import { AiOutlineMenu } from "react-icons/ai";


const arrayAssoc = [
  	{
		"email": "joao@taniel.com.br",
		"cpf": "009.556.123-90",
		"name": "Joao Maria",
		"endereco": "Estrada da ribeira",
		"numero": "332",
		"bairro": "Jargão",
		"cidade": "Limeira do Sul",
		"estado": "Rio Grande do Sul",
		"createdAt": "Tue, 15 Mar 2022 19:52:14 GMT",
		"codigoRegistro": "4887",
		"id": 1,
    "status":"ativo"
	},
	{
		"email": "carlos@taniel.com.br",
		"cpf": "029.236.123-90",
		"name": "Carlos Santos",
		"endereco": "Estrada da ribeira",
		"numero": "334",
		"bairro": "Centro",
		"cidade": "Limeira do Sul",
		"estado": "Rio Grande do Sul",
		"createdAt": "Tue, 15 Mar 2022 19:52:14 GMT",
		"codigoRegistro": "4567",
		"id": 2,
    "status":"inativo"
	},
  {
		"email": "joao@taniel.com.br",
		"cpf": "009.556.123-90",
		"name": "Maria Estela",
		"endereco": "Estrada da ribeira",
		"numero": "332",
		"bairro": "Jargão",
		"cidade": "Limeira do Sul",
		"estado": "Rio Grande do Sul",
		"createdAt": "Tue, 15 Mar 2022 19:52:14 GMT",
		"codigoRegistro": "4887",
		"id": 3,
    "status":"ativo"
	},
	{
		"email": "carlos@taniel.com.br",
		"cpf": "029.236.123-90",
		"name": "Santos Damasio",
		"endereco": "Estrada da ribeira",
		"numero": "334",
		"bairro": "Centro",
		"cidade": "Limeira do Sul",
		"estado": "Rio Grande do Sul",
		"createdAt": "Tue, 15 Mar 2022 19:52:14 GMT",
		"codigoRegistro": "4567",
		"id": 4,
    "status":"ativo"
	},
  {
		"email": "joao@taniel.com.br",
		"cpf": "009.556.123-90",
		"name": "Estevao Cruz",
		"endereco": "Estrada da ribeira",
		"numero": "332",
		"bairro": "Jargão",
		"cidade": "Limeira do Sul",
		"estado": "Rio Grande do Sul",
		"createdAt": "Tue, 15 Mar 2022 19:52:14 GMT",
		"codigoRegistro": "4887",
		"id": 5,
    "status":"inativo"
	},
	{
		"email": "carlos@taniel.com.br",
		"cpf": "029.236.123-90",
		"name": "Carlos Santos",
		"endereco": "Estrada da ribeira",
		"numero": "334",
		"bairro": "Centro",
		"cidade": "Limeira do Sul",
		"estado": "Rio Grande do Sul",
		"createdAt": "Tue, 15 Mar 2022 19:52:14 GMT",
		"codigoRegistro": "4567",
		"id": 6,
    "status":"ativo"
	}
];

const Associados = () => {
  const [showForm, setShowForm] = useState(false);
  const [busca, setBusca] = useState("") // Armazena dados da busca
  const [arrayBusca, setArrayBusca] = useState ([])
  const [status, setStatus] = useState ("")
  let array = arrayAssoc


  // Exibe o Formulario de cadastro associado
  const handleClick = () => {
    setShowForm(!showForm);
  };

  const onSubmit = (e) => {
    e.preventDefault()
    setArrayBusca(arrayAssoc.filter((associado)=>associado.name.toLocaleLowerCase().includes(busca.toLocaleLowerCase().trim())))
    setBusca("")
  }


  const changeStatus = (e) =>{
    setStatus(e.target.value)
    let status = e.target.value
    status === 'Status...' || status === 'todos' ? setArrayBusca(arrayAssoc) : 
    setArrayBusca(arrayAssoc.filter((associado)=>associado.status === status))

  }

  arrayBusca.length > 1 ? array = arrayBusca : status ? array = arrayBusca : array = arrayAssoc
  

  console.log(arrayBusca)
  console.log(status)


  return (
    <>
      <Header icon={<AiOutlineMenu />} />
      <Sidebar />
      <Container>
        <MotionDiv>
          {/* <h2>Cadastrar Associados</h2> */}
          {showForm && <Blocker><FormModalAssociados handleClick={handleClick}/></Blocker>}
         
          <Busca handleClick={handleClick} // Componente de busca
                  setBusca={setBusca}
                  busca={busca}
                  setStatus={setStatus}
                  status={status}
                  changeStatus={changeStatus}
                  onSubmit={onSubmit}
                  label='Associado'
                />
         
          <DivLista
            title1="Nome"
            title2="Status"
            title3="Débitos"
            title4="Ações"
          >
            {array.map((itens) => (
              <Lista key={itens.id}
                info1={<span>{itens.name}</span>}
                info2={<div></div>}
                info3={"Devedor"}
                info4={<ButtonAdd icon={BsInfoSquare}></ButtonAdd>}
              />
            ))}
          </DivLista>
        </MotionDiv>
      </Container>
    </>
  );
};

export default Associados;





  // teste busca por caractere #########################################################################
  // const novo = arrayAssoc[0].name.slice(0,busca.length)

    // if (busca.length > 0){

      // setArrayBusca(arrayAssoc.filter((item) => item.name.slice(0,busca.length) === busca)) 
      // setArrayBusca(arrayAssoc.filter((item) => item.name === busca)) 

      // const novo = arrayAssoc.filter((associado) => 
      //   associado.name.toLocaleLowerCase().includes(busca))
    // }else{
    //   console.log('busca vazia')
    // }