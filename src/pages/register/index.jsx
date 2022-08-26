import React, { useContext } from "react";
import { Link } from "react-router-dom";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ContainerRegister, HeaderRegister, LogoRegister, ButtonLogoutDashboard, ContainerFormRegister, H3Register, PRegsiter, FormRegister, LabelRegister, InputRegister, SelectRegister, ButtonRegister } from "./styles"
import { UserContext } from "../../providers/userProviders";


function Register() {

    const his = useHistory()

    const { handleRegister } = useContext(UserContext)

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória").matches((/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/), "Senha inválida. Deve conter conter no mínimo uma letra minúscula, uma maiúscula, um número, um caractere especial e com o comprimento mínimo de oito caracteres"),
        confirmPassword: yup.string().required("Confirmação obrigatória").oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
        bio: yup.string().required("Bio obrigatória"),
        contact: yup.string().required("Forma de contato obrigatória"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema),
    });

    const onSubmitFunction = (data) => {
        handleRegister(data)
    }

    return (
        <ContainerRegister>
            <HeaderRegister>
                <LogoRegister>KenzieHub</LogoRegister>
                <Link to={`/`}>
                    <ButtonLogoutDashboard>Voltar</ButtonLogoutDashboard>
                </Link>
            </HeaderRegister>
            <ContainerFormRegister>
                <H3Register>Crie sua conta</H3Register>
                <PRegsiter>Rápido e grátis, vamos nessa!</PRegsiter>
                <FormRegister onSubmit={handleSubmit(onSubmitFunction)}>
                    <LabelRegister>Nome
                        <InputRegister placeholder="Digite aqui seu nome" {...register("name")}></InputRegister>
                        {errors.name?.message}
                    </LabelRegister>
                    <LabelRegister>E-mail
                        <InputRegister placeholder="Digite aqui seu e-mail" {...register("email")}></InputRegister>
                        {errors.email?.message}
                    </LabelRegister>
                    <LabelRegister>Senha
                        <InputRegister type="password" placeholder="Digite aqui sua senha" {...register("password")}></InputRegister>
                        {errors.password?.message}
                    </LabelRegister>
                    <LabelRegister>Confirme sua senha
                        <InputRegister type="password" placeholder="Digite novamente sua senha" {...register("confirmPassword")}></InputRegister>
                        {errors.confirmPassword?.message}
                    </LabelRegister>
                    <LabelRegister>Bio
                        <InputRegister placeholder="Fale sobre você" {...register("bio")}></InputRegister>
                        {errors.bio?.message}
                    </LabelRegister>
                    <LabelRegister>Contato
                        <InputRegister placeholder="Opção de contato" {...register("contact")}></InputRegister>
                        {errors.contact?.message}
                    </LabelRegister>
                    <LabelRegister>Selecionar módulo
                        <SelectRegister {...register("course_module")}>
                            <option>Primeiro Módulo</option>
                            <option>Segundo Módulo</option>
                            <option>Terceiro Módulo</option>
                            <option>Quarto Módulo</option>
                            <option>Quinto Módulo</option>
                            <option>Sexto Módulo</option>
                        </SelectRegister>
                    </LabelRegister>
                    <ButtonRegister type="submit">Cadastrar</ButtonRegister>
                </FormRegister>
            </ContainerFormRegister>
        </ContainerRegister>
    )
}

export default Register