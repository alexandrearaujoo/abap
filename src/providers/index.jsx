import {AssociadoProvider} from './Associados'
import { MedidoresPrivider } from './Medidores'
import { PagamentosProvider } from './Pagamentos'
import { SolicitacoesProvider } from './Solicitacoes'

const Providers = ({children}) => {
    return (
        <AssociadoProvider>
            <MedidoresPrivider>
                <PagamentosProvider>
                    <SolicitacoesProvider>
                        {children}
                    </SolicitacoesProvider>
                </PagamentosProvider>
            </MedidoresPrivider>
        </AssociadoProvider>
    )

}

export default Providers