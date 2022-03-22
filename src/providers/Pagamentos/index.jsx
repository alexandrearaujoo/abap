import {createContext, useEffect, useContext, useState} from 'react'
import api from '../../services/api'

const PagamentosContext = createContext([])

export const PagamentosProvider = ({children}) => {

    const [pagamentos, setPagamentos] = useState([])
    const [historicoUser, setHistoricoUser] = useState([])

    const loadPagamentos = () => {
        api.get('/pagamentos')
        .then(res => setPagamentos(res.data))
    }

    useEffect(() => {
      loadPagamentos()
    },[])

    const getHistoricoAssociado = (id) => {
        api.get(`/users/${id}`)
        .then(res => setHistoricoUser(res.data.historico_pagamentos))
        .catch(err => console.log(err))
    }

    return (
        <PagamentosContext.Provider value={{pagamentos, historicoUser, getHistoricoAssociado}}>
            {children}
        </PagamentosContext.Provider>
    )
}

export const usePagamentos = () => useContext(PagamentosContext)