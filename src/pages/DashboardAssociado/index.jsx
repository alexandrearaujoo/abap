import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import {AiOutlineMenu} from "react-icons/ai"
import Main from "../../components/Main";

const DashboardAssociado = () => {
  return (
    <div>
      <Header icon={<AiOutlineMenu />} />
      <Main>
        <h2>Bem-vindo, @Usuário!</h2>
        <section>
          <p>Membro desde: xx/xx/xxxx</p>
        </section>
      </Main>
      <Sidebar />
    </div>
  )
}

export default DashboardAssociado;