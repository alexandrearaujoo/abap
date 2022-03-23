import { createContext, useEffect, useState, useContext } from 'react'
import { toast } from 'react-hot-toast'

import api from '../../services/api'

const UsuarioContext = createContext([])

export const UsuarioProvider = ({ children }) => {

    const [usuarios, setUsuarios] = useState([])
    const [usuario, setUsuario] = useState({}) 
    const [tokenUser, setTokenUser] = useState(localStorage.getItem("@arap.tokenUsuario") || "");
    const [idUsuario, setIdUsuario] = useState(localStorage.getItem("@arap.idUsuario") || "");

    const getAll = () => {
        api.get('/users', { // <---- Falta a rota para carregar apenas os usuarios gestores
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzhjZGI0MTg2N2QxNzg2YjQ0N2ZkYiIsImlhdCI6MTY0ODAwNTM5MCwiZXhwIjoxNjQ4MDkxNzkwfQ.3GN1sflU74qi3uxbZ47WdHLzmh-eyBmGghRiw_89esM'
            }
        })
            .then(res => setUsuarios(res.data))
    }

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
                changeTokenUser(res.data.token)
                changeIdUsuario(res.data.id)
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
    useEffect(() => {
        getAll()
        if (tokenUser !== "") {
            getOne(idUsuario)
        }
    }, [])
    return (
        <UsuarioContext.Provider value={{ usuarios, usuario, addUsuario, updateUsuario, loginUsuario, tokenUser, changeTokenUser  }}>
            {children}
        </UsuarioContext.Provider>
    )
}


export const useUsuarios = () => useContext(UsuarioContext)