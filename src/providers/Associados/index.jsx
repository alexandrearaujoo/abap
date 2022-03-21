import { createContext, useEffect, useState, useContext } from 'react'
import { toast } from 'react-hot-toast'

import api from '../../services/api'

const AssociadoContext = createContext([])

export const AssociadoProvider = ({ children }) => {

    const [associados, setAssociados] = useState([])
    const [infoUser, setInfoUser] = useState([]) // <-- Deveria ser associado 
    const [tokenUser, setTokenUser] = useState(localStorage.getItem("@arap.tokenUser") || "");

    const loadAssociado = () => {
        api.get('/users', {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzUwYzk1MjEwNGE0YTk5YWVkMzI0NyIsImlhdCI6MTY0NzgyMjMzNSwiZXhwIjoxNjQ3OTA4NzM1fQ.AsGrnGVddjoH94Pej8-mEHaRX_tIrk_wPoeDLi7SFTk'
            }
        })
        .then (res => setAssociados(res.data))
    }

    useEffect(() => {
        loadAssociado()
    },[])
  
    const changeTokenUser = (item) => {
        localStorage.setItem("@arap.tokenUser", item);
        setTokenUser(item);
    };

    const loginAssociado = (data) => {
   
        api
            .post("/users/login", data, {
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then((res) => {      
                changeTokenUser(res.data.token)                  
                infosUser(res.data.id);              
            })
            .catch((err) => {
                
                toast.error("Verifique o CPF informado.")
                
            })
      

    };

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
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    useEffect(() => {


        // loadAssociado()
    }, [])

    return (
        <AssociadoContext.Provider value={{ associados, infoUser, addAssociado, infosUser, updateUser, loginAssociado, tokenUser, changeTokenUser }}>
            {children}
        </AssociadoContext.Provider>
    )
}


export const useAssociados = () => useContext(AssociadoContext)