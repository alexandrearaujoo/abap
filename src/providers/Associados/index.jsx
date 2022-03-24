import { createContext, useEffect, useState, useContext } from 'react'
import { toast } from 'react-hot-toast'

import api from '../../services/api'

const AssociadoContext = createContext([])

export const AssociadoProvider = ({ children }) => {

    const [associados, setAssociados] = useState([])
    const [infoUser, setInfoUser] = useState([]) // <-- Deveria ser associado 
    const [tokenUser, setTokenUser] = useState(localStorage.getItem("@arap.tokenUser") || "");
    const [idAssociado, setIdAssociado] = useState(localStorage.getItem("@arap.idAssociado") || "");

    const loadAssociado = () => {
        api.get('/users', {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzUwYzk1MjEwNGE0YTk5YWVkMzI0NyIsImlhdCI6MTY0ODAwMDU1OSwiZXhwIjoxNjQ4MDg2OTU5fQ.vqfmvLGrK0N_AtGIRxe0j3zVqLbhlNizdcbRFfVuyqc'
            }
        })
            .then(res => setAssociados(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadAssociado()
    },[])

    const changeTokenUser = (item) => {
        localStorage.setItem("@arap.tokenUser", item);
        setTokenUser(item);
    };
    const changeIdAssociado = (item) => {
        localStorage.setItem("@arap.idAssociado", item);
        setIdAssociado(item);
    };
    const loginAssociado = (data) => {

        api
            .post("/users/login", data, {
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then((res) => {
                localStorage.setItem('ARAP:User:', JSON.stringify(res.data))
                toast.success('Login Realizado')
                changeTokenUser(res.data.token)
                changeIdAssociado(res.data.id)
                infosUser(res.data.id);
            })
            .catch((err) => {

                toast.error("Verifique o CPF informado.")

            })
    }

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

    const infosUser = (id) => { // <-- Deveria ser getOne ou getUser ou getAssociado
        api.get(`/users/${id}`)
            .then((res) => setInfoUser(res.data))
            .catch((err) => console.log(err))
    }

    const updateUser = (data, id) => {
        api.patch(`/users/${id}`, data)
            .then(res => {
                toast.success('Dados atualizados')
            })
            .catch(err => console.log(err))
    }

    const logout = () => {
        localStorage.clear()
        setTokenUser('')
    }
    return (
        <AssociadoContext.Provider value={{ associados, infoUser, addAssociado, infosUser, updateUser, loginAssociado, tokenUser, logout }}>
            {children}
        </AssociadoContext.Provider>
    )
}


export const useAssociados = () => useContext(AssociadoContext)