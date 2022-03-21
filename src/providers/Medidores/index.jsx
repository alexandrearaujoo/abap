import {createContext, useContext, useEffect, useState} from 'react'
import api from '../../services/api'

const MedidoresContext = createContext([])

export const MedidoresPrivider = ({children}) => {

    const [medidores, setMedidores] = useState([])

    useEffect(() => {
        const loadMedidores = () => {
            api.get('/medidores')
            .then(res => setMedidores(res.data))
        }
       // loadMedidores()
    },[])


    return (
        <MedidoresContext.Provider value={{medidores}}>
            {children}
        </MedidoresContext.Provider>
    )
}

export const useMedidores = () => useContext(MedidoresContext)