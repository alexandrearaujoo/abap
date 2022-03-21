import { useForm } from "react-hook-form";
import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../components/Input";
import  toast  from "react-hot-toast";
import Header from "../../components/Header";


import api from "../../services/api";

import { Container, ContainerForm } from "./style";

const LoginAssociado = () => {
  
    const history = useHistory();

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
    // const isLoggedIn = (token) => {
    //     if (token) {
    //         history.push(`/dashboardAssociado`);  
    //     }
    // }
    // useEffect(() => {
    //     isLoggedIn(tokenAssociado);
    // }, []);
    return (
        <>
            <Header />
        <Container>

            <ContainerForm>
                <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
                    <div className="message-login">
                        <h3>Login do Associado</h3>
                        <span>Informe o seu CPF é o código do registro vinculado ao seu nome, para ter acesso a área do associado com todas as suas funcionalidades.</span>
                    </div>

                    <Input label='Email'
                    name='email'
                    error={errors.cpf?.message}
                    register={register}
                    />
                    <Input label='Password'
                    name='passwrod'
                    error={errors.codigoRegistro?.message}
                    register={register}
                    />
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
        </>
    );
};

export default LoginAssociado;

