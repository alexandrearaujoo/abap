import {createContext, useEffect, useState, useContext} from 'react'
import api from '../../services/api'

const AssociadoContext = createContext([])

export const AssociadoProvider = ({children}) => {

    const [associados, setAssociados] = useState([])

    useEffect(() => {
        const loadAssociado = () => {
            api.get('/users', {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzUwYzk1MjEwNGE0YTk5YWVkMzI0NyIsImlhdCI6MTY0NzczMjU5NSwiZXhwIjoxNjQ3ODE4OTk1fQ.e4PKeAWljCeTh0YSBnRopt0IeL-Dg9IQNgH1jpI9SiE'
                }
            })
            .then (res => setAssociados(res.data))
        }

        loadAssociado()
    })


    return (
        <AssociadoContext.Provider value={{associados}}>
            {children}
        </AssociadoContext.Provider>
    )
}

export const useAssociados = () => useContext(AssociadoContext)