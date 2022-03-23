import { createContext, useEffect, useState, useContext } from 'react'
import { toast } from 'react-hot-toast'

import api from '../../services/api'

const UsuarioContext = createContext([])

export const UsuarioProvider = ({ children }) => {

    const [usuarios, setUsuarios] = useState([])
    const [usuario, setUsuario] = useState([]) 
    const [tokenUser, setTokenUser] = useState(localStorage.getItem("@arap.tokenUsuario") || "");

    const getAll = () => {
        api.get('/users', { // <---- Falta a rota para carregar apenas os usuarios gestores
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzczZjYwYTJhODJiYTYxZWRlMzRhMyIsImlhdCI6MTY0NzkwODg5MCwiZXhwIjoxNjQ3OTk1MjkwfQ.p9jJCEDzmG5j7TEtPiv7bJx-qyVbozu4Z1z8cvlRvSk'
            }
        })
            .then(res => setUsuarios(res.data))
    }

    useEffect(() => {
        getAll()
    }, [])

    const changeTokenUser = (item) => {
        localStorage.setItem("@arap.tokenUsuario", item);
        setTokenUser(item);
    };

    const loginUsuario = (data) => {

        api
            .post("/users/loginAdm", data, {
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then((res) => {
                localStorage.setItem('ARAP:ADM', JSON.stringify(res.data))
                changeTokenUser(res.data.token)
                getOne(res.data.id);
            })
            .catch((err) => {

                toast.error("Verifique o CPF informado.")

            })
    }

    const addUsuario = (data) => {
        api.post('/users', data)
            .then(res => {
                toast.success('Usuario cadastrado')
                setUsuarios([...usuarios, res.data])
            })
            .catch((error) => {
                console.log(error)
                toast.error('Não foi possivel incluir o usuário tente novamente.')
            })
    }

    const getOne = (id) => { // <-- Deveria ser getOne ou getUser ou getAssociado
        api.get(`/users/${id}`)
            .then((res) => setUsuario(res.data))
            .catch((err) => console.log(err))
    }

    const updateUsuario = (data, id) => {
        api.patch(`/users/${id}`, data)
            .then(res => setUsuario(res.data))
            .catch(err => console.log(err))
    }

    return (
        <UsuarioContext.Provider value={{ usuarios, usuario, addUsuario, updateUsuario, loginUsuario, tokenUser, changeTokenUser  }}>
            {children}
        </UsuarioContext.Provider>
    )
}


export const useUsuarios = () => useContext(UsuarioContext)