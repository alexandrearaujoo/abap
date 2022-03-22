import {createContext, useEffect, useContext, useState} from 'react'
import api from '../../services/api'

const PagamentosContext = createContext([])

export const PagamentosProvider = ({children}) => {

    const [pagamentos, setPagamentos] = useState([])
    const [historicoUser, setHistoricoUser] = useState([])
    const [infoPagamento, setInfoPagamento] = useState([])

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

    const getPagamento = (id) => {
        api.get(`/pagamentos/${id}`)
        .then(res => setInfoPagamento(res.data))
        .catch(err => console.log(err))
    }

    // const gerarQRcode = (data, id) => {
    //     api.post(`/pagamentos/${id}`, data)
    //     .then(res => )
    // }

    return (
        <PagamentosContext.Provider value={{pagamentos, historicoUser,infoPagamento, getHistoricoAssociado, getPagamento}}>
            {children}
        </PagamentosContext.Provider>
    )
}

export const usePagamentos = () => useContext(PagamentosContext)