import { createContext, useEffect, useState, useContext } from 'react'
import { toast } from 'react-hot-toast'

import api from '../../services/api'

const UsuarioContext = createContext([])

export const UsuarioProvider = ({ children }) => {

    const [usuarios, setUsuarios] = useState([])
    const [usuario, setUsuario] = useState({}) 
    const [tokenUser, setTokenUser] = useState(localStorage.getItem("@arap.tokenUsuario") || "");
    const [setIdUsuario] = useState(localStorage.getItem("@arap.idUsuario") || "");


    const changeTokenUser = (item) => {
        localStorage.setItem("@arap.tokenUsuario", item);
        setTokenUser(item);
    };
    const changeIdUsuario = (item) => {
        localStorage.setItem("@arap.idUsuario", item);
        setIdUsuario(item);
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
                toast.success('Login Realizado')
                changeTokenUser(res.data.token)
                changeIdUsuario(res.data.id)
                getOne(res.data.id);
            })
            .catch((err) => {

                toast.error("Verifique o email ou senha.")

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

    const logout = () => {
        localStorage.clear()
        setTokenUser('')
    }
    return (
        <UsuarioContext.Provider value={{ usuarios, usuario, addUsuario, updateUsuario, loginUsuario, tokenUser, changeTokenUser, logout }}>
            {children}
        </UsuarioContext.Provider>
    )
}


export const useUsuarios = () => useContext(UsuarioContext)