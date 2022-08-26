import React, { useContext } from "react";
import { Link } from "react-router-dom";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Logo, DivLogin, H3Login, FormLogin, LabelLogin, InputLogin, ButtonEntrarLogin, PCadastrarLogin, ButtonCadastarLogin } from "./styles";
import { UserContext } from "../../providers/userProviders";


function Login() {

    const his = useHistory()

    const { handleLogin } = useContext(UserContext)

    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório"),
        password: yup.string().required("Senha obrigatória")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema),
    });

    const onSubmitFunction = (data) => {
        handleLogin(data)
    }

    return (
        <Container>
            <Logo>KenzieHub</Logo>
            <DivLogin>
                <H3Login>Login</H3Login>
                <FormLogin onSubmit={handleSubmit(onSubmitFunction)}>
                    <LabelLogin>E-mail
                        <InputLogin placeholder="Digite aqui seu e-mail" {...register("email")}></InputLogin>
                        {errors.email?.message}
                    </LabelLogin>
                    <LabelLogin>Senha
                        <InputLogin type="password" placeholder="Digite aqui sua senha" {...register("password")}></InputLogin>
                        {errors.password?.message}
                    </LabelLogin>
                    <ButtonEntrarLogin type="submit">Entrar</ButtonEntrarLogin>
                </FormLogin>
                <PCadastrarLogin>Ainda não possui uma conta?</PCadastrarLogin>
                <Link to={`/register`}>
                    <ButtonCadastarLogin>Cadastre-se</ButtonCadastarLogin>
                </Link>
            </DivLogin>
        </Container >
    )
}

export default Login