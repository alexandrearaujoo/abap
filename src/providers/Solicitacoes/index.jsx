import {createContext, useContext, useEffect, useState} from 'react'
import api from '../../services/api'
import {toast} from 'react-hot-toast'

const SolicitacoesContext = createContext([])

export const SolicitacoesProvider = ({children}) => {
    const [infoSolicitacoes, setInfosolicitacoes] = useState([]);
    const [solicitacoes, setSolicitacoes] = useState([])

    const loadSolicitacoes = () => {
        api
        .get('/solicitacoes')
        .then(res => setSolicitacoes(res.data))
        .catch((error) => console.log(error))
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

    const infosSolicitacoes = (id) => {
        api
          .get(`/solicitacoes/${id}`)
          .then((res) => setInfosolicitacoes(res.data))
          .catch((err) => console.log(err));
      };
    
      const updateSolicitacoes = (data, id) => {
        api
          .patch(`/solicitacoes/${id}`, data)
          .then((res) => loadSolicitacoes())
          .catch((err) => console.log(err));
      };


    return (
        <SolicitacoesContext.Provider 
        value={{
            solicitacoes, 
            sendRequest, 
            loadSolicitacoes,
            infosSolicitacoes,
            infoSolicitacoes,
            updateSolicitacoes,
            }}>
            {children}
        </SolicitacoesContext.Provider>
    )
}

export const useSolicitacoes = () => useContext(SolicitacoesContext)