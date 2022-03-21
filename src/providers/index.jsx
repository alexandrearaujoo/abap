import {AssociadoProvider} from './Associados'
import { MedidoresPrivider } from './Medidores'
import { PagamentosProvider } from './Pagamentos'
import { SolicitacoesProvider } from './Solicitacoes'
import { TokenUserProvider } from './tokenUser.jsx'

const Providers = ({children}) => {
    return (
        <AssociadoProvider>
            <MedidoresPrivider>
                <PagamentosProvider>
                    <SolicitacoesProvider>
                        <TokenUserProvider>
                        {children}
                        </TokenUserProvider>
                    </SolicitacoesProvider>
                </PagamentosProvider>
            </MedidoresPrivider>
        </AssociadoProvider>
    )

}

export default Providers