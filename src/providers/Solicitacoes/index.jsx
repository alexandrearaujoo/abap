import {createContext, useContext, useEffect, useState} from 'react'
import api from '../../services/api'
import {toast} from 'react-hot-toast'

const SolicitacoesContext = createContext([])

export const SolicitacoesProvider = ({children}) => {

    const [solicitacoes, setSolicitacoes] = useState([])

    const loadSolicitacoes = () => {
        api.get('/solicitacoes')
        .then(res => setSolicitacoes(res.data))
    }
    useEffect(() => {
        loadSolicitacoes()
    },[])

    const sendRequest = (data, id) => {
        api.post(`/solicitacoes/${id}`, data)
        .then(res => {
            toast.success('Solicitação enviada')
            setSolicitacoes([...solicitacoes, res.data])
        })
        .catch(err => console.log(err))
    }


    return (
        <SolicitacoesContext.Provider value={{solicitacoes, sendRequest, loadSolicitacoes}}>
            {children}
        </SolicitacoesContext.Provider>
    )
}

export const useSolicitacoes = () => useContext(SolicitacoesContext)