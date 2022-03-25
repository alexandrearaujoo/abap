import { AssociadoProvider } from './Associados'
import { MedidoresPrivider } from './Medidores'
import { PagamentosProvider } from './Pagamentos'
import { SolicitacoesProvider } from './Solicitacoes'
import { UsuarioProvider } from './Usuarios'
const Providers = ({ children }) => {
    return (
        <UsuarioProvider>
            <AssociadoProvider>
                <MedidoresPrivider>
                    <PagamentosProvider>
                        <SolicitacoesProvider>

                            {children}

                        </SolicitacoesProvider>
                    </PagamentosProvider>
                </MedidoresPrivider>
            </AssociadoProvider>
        </UsuarioProvider>
    )

}

export default Providers