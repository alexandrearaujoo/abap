import { Switch, Route } from 'react-router-dom'

import Associados from '../pages/Associados'
import CadastroAssociados from '../pages/CadastroAssociados'
import GerenciarPagamentos from '../pages/GerenciarPagamentos'
import DashBoardADM from '../pages/DashboardAdmin'
import Solicitacoes from '../pages/Solicitacoes'
import LoginAssociado from '../pages/LoginAssociado'
import { AnimatePresence } from 'framer-motion'
import { TokenAssociadoProvider } from '../providers/tokenAssociado.js'
const Router = () => {
    return (
        <AnimatePresence>
            <TokenAssociadoProvider>
                <Switch>
                    <Route exact path='/'>
                    </Route>
                    <Route path='/loginAssociado'>
                        <LoginAssociado />
                    </Route>
                    <Route path='/dashboardadm'>
                        <DashBoardADM />
                    </Route>
                    <Route path='/associados'>
                        <Associados />
                    </Route>
                    <Route path='/gerenciamento'>
                        <GerenciarPagamentos />
                    </Route>
                    <Route path='/cadastros'>
                        <CadastroAssociados />
                    </Route>
                    <Route path='/solicitacoes'>
                        <Solicitacoes />
                    </Route>
                </Switch>
            </TokenAssociadoProvider>
        </AnimatePresence>
    )
}

export default Router