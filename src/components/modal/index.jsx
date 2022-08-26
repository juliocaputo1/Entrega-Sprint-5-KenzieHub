import React from "react";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { DivModal, ModalHeader, H3ModalHeader, ButtonCloseModal, ModalBody, ModalForm, ModalLabel, ModalInput, ModalSelect, ModalButtonRegister } from "./styles"
import { UserContext } from "../../providers/userProviders";
import { useContext } from "react"
import { TechContext } from "../../providers/techProvider";
import axios from "axios";

function Modal() {

    const { show } = useContext(UserContext)

    const { setShow } = useContext(UserContext)

    const { addTech } = useContext(TechContext)

    const formSchema = yup.object().shape({
        title: yup.string().required("Nome da Tecnologia Obrigatório"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema),
    });

    const onSubmitFunction = (data) => {
        addTech(data)
    }

    if (show === false) {
        return (
            null
        )
    }

    else {
        return (
            <DivModal>
                <ModalHeader>
                    <H3ModalHeader>Cadastrar Tecnologia</H3ModalHeader>
                    <ButtonCloseModal onClick={() => setShow(false)}>Fechar</ButtonCloseModal>
                </ModalHeader>
                <ModalBody>
                    <ModalForm onSubmit={handleSubmit(onSubmitFunction)} >
                        <ModalLabel>Nome
                            <ModalInput placeholder="Nome da Tecnologia" {...register("title")}></ModalInput>
                            {errors.title?.message}
                        </ModalLabel>
                        <ModalLabel>Status
                            <ModalSelect {...register("status")}>
                                <option>Iniciante</option>
                                <option>Intermediário</option>
                                <option>Avançado</option>
                            </ModalSelect>
                        </ModalLabel>
                        <ModalButtonRegister type="submit">Cadastrar Tecnologia</ModalButtonRegister>
                    </ModalForm>
                </ModalBody>
            </DivModal>
        )
    }
}

export default Modal