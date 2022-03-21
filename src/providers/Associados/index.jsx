import {createContext, useEffect, useState, useContext} from 'react'
import {toast} from 'react-hot-toast'
import api from '../../services/api'

const AssociadoContext = createContext([])

export const AssociadoProvider = ({children}) => {

    const [associados, setAssociados] = useState([])
    const [infoUser, setInfoUser] = useState([])

    useEffect(() => {
        const loadAssociado = () => {
            api.get('/users', {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzUwYzk1MjEwNGE0YTk5YWVkMzI0NyIsImlhdCI6MTY0NzgyMjMzNSwiZXhwIjoxNjQ3OTA4NzM1fQ.AsGrnGVddjoH94Pej8-mEHaRX_tIrk_wPoeDLi7SFTk'
                }
            })
            .then (res => setAssociados(res.data))
        }

        loadAssociado()
    },[])

    const addAssociado = (data) => {
        api.post('/users', data)
        .then(res => {
            toast.success('Usuario cadastrado')
            setAssociados([...associados, res.data])
        })
        .catch((error) => {
            console.log(error)
            toast.error('Algo deu errado')
        })
    }

    const infosUser = (id) => {
        api.get(`/users/${id}`)
        .then((res) => setInfoUser(res.data))
        .catch((err) => console.log(err))
    }

    const updateUser = (data, id) => {
        api.patch(`/users/${id}`, data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    return (
        <AssociadoContext.Provider value={{associados, infoUser, addAssociado, infosUser, updateUser}}>
            {children}
        </AssociadoContext.Provider>
    )
}

export const useAssociados = () => useContext(AssociadoContext)