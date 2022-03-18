import {Switch, Route} from 'react-router-dom'

import Associados from '../pages/Associados'
import CadastroAssociados from '../pages/CadastroAssociados'
import GerenciarPagamentos from '../pages/GerenciarPagamentos'
import DashBoardADM from '../pages/DashboardAdmin'
import Solicitacoes from '../pages/Solicitacoes'
import LoginAssociado from '../pages/LoginAssociado'
import {AnimatePresence} from 'framer-motion'

const Router = () => {
    return (
        <AnimatePresence>
            <Switch>
                <Route exact path='/'>            
                </Route>
                <Route path='/loginAssociado'>
                    <LoginAssociado/>
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
        </AnimatePresence>
    )
}

export default Router