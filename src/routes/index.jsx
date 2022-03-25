import { Switch, Route, Redirect } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Associados from "../pages/Associados";
import CadastroMedidores from "../pages/Medidores";
import GerenciarPagamentos from "../pages/GerenciarPagamentos";
import DashBoardADM from "../pages/DashboardAdmin";
import Solicitacoes from "../pages/Solicitacoes";
import LoginAssociado from "../pages/LoginAssociado";
import Homepage from "../pages/Home";
import LoginAdm from "../pages/LoginAdm";
import DashboardAssociado from "../pages/DashboardAssociado";
import HistoricoPagamentos from "../pages/HistoricoPagamentos";
import Leitura from "../pages/Leitura";
import SolicitacaoAssociado from "../pages/SolicitacaoAssociado";

const Router = () => {
  const [auth, setAuth] = useState(false);
  const [authAdm, setAuthAdm] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("@arap.tokenUser");
    if (token) {
      return setAuth(true);
    }

    const tokenAdm = localStorage.getItem("@arap.tokenUsuario");
    if (tokenAdm) {
      return setAuthAdm(true);
    }
  }, []);
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/login">
          <LoginAssociado setAuth={setAuth}/>
        </Route>
        <Route path="/loginAdm">
          <LoginAdm setAuthAdm={setAuthAdm}/>
        </Route>
        <Route path="/dashboardadm">
          <DashBoardADM authAdm={authAdm} />
        </Route>
        <Route path="/dashboardAssociado">
          <DashboardAssociado auth={auth} />
        </Route>
        <Route path="/associados">
          <Associados authAdm={authAdm} />
        </Route>
        <Route path="/gerenciamento">
          <GerenciarPagamentos authAdm={authAdm}/>
        </Route>
        <Route path="/cadastros">
          <CadastroMedidores authAdm={authAdm}/>
        </Route>
        <Route path="/solicitacoesAdm">
          <Solicitacoes authAdm={authAdm}/>
        </Route>
        <Route path="/historicoPagamentos">
          <HistoricoPagamentos auth={auth}/>
        </Route>
        <Route path="/solicitacaoAssociado">
          <SolicitacaoAssociado auth={auth}/>
        </Route>
        <Route path="/leitura">
          <Leitura auth={auth}/>
        </Route>
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </AnimatePresence>
  );
};

export default Router;
