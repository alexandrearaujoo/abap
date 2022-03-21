import {createContext, useEffect, useContext, useState} from 'react'
import api from '../../services/api'

const PagamentosContext = createContext([])

export const PagamentosProvider = ({children}) => {

    const [pagamentos, setPagamentos] = useState([])

    useEffect(() => {
        const loadPagamentos = () => {
            api.get('/pagamentos')
            .then(res => setPagamentos(res.data))
        }

      //  loadPagamentos()
    },[])

    return (
        <PagamentosContext.Provider value={{pagamentos}}>
            {children}
        </PagamentosContext.Provider>
    )
}

export const usePagamentos = () => useContext(PagamentosContext)