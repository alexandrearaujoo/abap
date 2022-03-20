import {createContext, useContext, useEffect, useState} from 'react'
import api from '../../services/api'

const SolicitacoesContext = createContext([])

export const SolicitacoesProvider = ({children}) => {

    const [solicitacoes, setSolicitacoes] = useState([])

    useEffect(() => {
        const loadSolicitacoes = () => {
            api.get('/solicitacoes')
            .then(res => setSolicitacoes(res.data))
        }

        loadSolicitacoes()
    },[])


    return (
        <SolicitacoesContext.Provider value={{solicitacoes}}>
            {children}
        </SolicitacoesContext.Provider>
    )
}

export const useSolicitacoes = () => useContext(SolicitacoesContext)