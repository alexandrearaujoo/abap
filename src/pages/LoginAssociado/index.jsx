/* import { useForm } from "react-hook-form";
import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import  toast  from "react-hot-toast";
import { TokenAssociadoContext } from "../../providers/tokenAssociado";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useHistory } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {toast} from 'react-hot-toast'

import api from "../../services/api";

import { Container, ContainerForm } from "./style";
const associadoModule = require('../../modules/associado')
const LoginAssociado = () => {
  
    const history = useHistory();
 
    const { tokenAssociado, changeTokenAssociado } = useContext(TokenAssociadoContext);

    const formSchema = yup.object().shape({
        cpf: yup
            .string()
            .min(14, "No minimo 14 caracteres")
            .required("Campo Obrigatório"),
        codigoRegistro: yup
            .string()
            .min(4, "No minimo 4 digitos")
            .required("Campo Obrigatório"),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const onSubmitFunction = (data) => {
        api
            .post("/associados/login", data)
            .then((resp) => {                   
                
                if (resp.data.status === "ok") {
                    toast.success("Bem-vindo !!")
                    changeTokenAssociado(resp.data.accessToken);
                    history.push(`/dashboardAssociado`);
                } else {
                    // TODO:  Adicionar o toast com messagem de erro abaixo 
                    toast.error("Verifique o CPF ou código do registro.");
                }                       
             
            })
            .catch((err) => {
                // TODO: Adicionar o toast com messagem de erro abaixo
                toast.error("Não foi possivel acessar o servidor!");         
            });
    };

    // Verifica se o associado ja esta logado, caso verdadeiro 
    // o direciona para o dashboardAssociado
    const isLoggedIn = (token) => {
        if (token) {
            history.push(`/dashboardAssociado`);  
        }
    }
    useEffect(() => {
        isLoggedIn(tokenAssociado);
    }, []);
    return (
        <Container>

            <ContainerForm>
                <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
                    <div className="message-login">
                        <h3>Login do Associado</h3>
                        <span>Informe o seu CPF é o código do registro vinculado ao seu nome, para ter acesso a área do associado com todas as suas funcionalidades.</span>
                    </div>

                    <input type="text" placeholder="CPF do associado" {...register("cpf")} />
                    <span className="message-error">{errors.cpf?.message}</span>

                    <input type="text" placeholder="Código do Registro" {...register("codigoRegistro")} />
                    <span className="message-error">{errors.codigoRegistro?.message}</span>
                    <div className="message-buttons">

                        <button className="btnLogin" type="submit">Entrar</button>
                        <div className="message-register">
                            <p> Ainda não é um associado? </p>
                        </div>
                        <button
                            onClick={() => history.push("/solicitarAssociacao")}
                            className="btnRegister"
                        >
                            Solicite seu cadastro
                        </button>
                    </div>
                </form>
            </ContainerForm>
        </Container>
    );
};

export default LoginAssociado;
 */