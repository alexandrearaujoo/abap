import { useForm } from "react-hook-form";
import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useUsuarios } from '../../providers/Usuarios'
import Header from "../../components/Header";
import Main from "../../components/Main";
import Input from "../../components/Input";

import { Container, ContainerForm } from "./style";

const LoginAdm = () => {

    const history = useHistory();
    const { loginUsuario, tokenUser } = useUsuarios()

    const formSchema = yup.object().shape({
        email: yup
            .string()
            .min(10, "No minimo 14 caracteres")
            .required("Campo Obrigatório"),
        password: yup
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
        loginUsuario(data)
    };
    useEffect(() => {

        if (tokenUser !== "") {
            history.push(`/dashboardadm`);
        }

    }, [tokenUser])

    return (
        <>
            <Header text="Voltar" link="/" />
            <Main>

                <Container>
                    <ContainerForm>
                        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
                            <div className="message-login">
                                <h3>Login do gestor</h3>
                                <span>Informe seu e-mail e senha, para ter acesso as suas funcionalidades.</span>
                            </div>
                            <Input label='Email'
                                name='email'
                                error={errors.email?.message}
                                register={register}
                            />
                            <Input label='Password'
                                name='password'
                                error={errors.password?.message}
                                register={register}
                                type="password"
                            />
                            <div className="message-buttons">
                                <button className="btnLogin" type="submit">Entrar</button>
                            </div>
                        </form>
                    </ContainerForm>
                </Container>
            </Main>
        </>
    );
};

export default LoginAdm;

