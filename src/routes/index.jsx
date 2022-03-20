import { Switch, Route, Redirect} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Associados from "../pages/Associados";
import CadastroMedidores from "../pages/Medidores";
import GerenciarPagamentos from "../pages/GerenciarPagamentos";
import DashBoardADM from "../pages/DashboardAdmin";
import Solicitacoes from "../pages/Solicitacoes";
import LoginAssociado from "../pages/LoginAssociado";
import Homepage from "../pages/Home";
import LoginAdm from "../pages/LoginAdm";
import DashboardAssociado from "../pages/DashboardAssociado";
import HistoricoPagamentos from '../pages/HistoricoPagamentos'
import Leitura from '../pages/Leitura'
import SolicitacaoAssociado from "../pages/SolicitacaoAssociado";

const Router = () => {
  return (
    <AnimatePresence>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/login">
            <LoginAssociado />
          </Route>
          <Route path="/loginAdm">
            <LoginAdm />
          </Route>
          <Route path="/dashboardadm">
            <DashBoardADM />
          </Route>
          <Route path='/dashboardAssociado'>
            <DashboardAssociado />
          </Route>
          <Route path="/associados">
            <Associados />
          </Route>
          <Route path="/gerenciamento">
            <GerenciarPagamentos />
          </Route>
          <Route path="/cadastros">
            <CadastroMedidores />
          </Route>
          <Route path="/solicitacoesAdm">
            <Solicitacoes />
          </Route>
          <Route path='/historicoPagamentos'>
            <HistoricoPagamentos />
          </Route>
          <Route path='/solicitacaoAssociado'>
            <SolicitacaoAssociado />
          </Route>
          <Route path='/leitura'>
            <Leitura />
          </Route>
          <Route render={() => <Redirect to="/" />} />
        </Switch>
    </AnimatePresence>
  );
};

export default Router;
