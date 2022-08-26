import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../login";
import { useHistory } from "react-router-dom";
import { DivDashboard, HeaderDashboard, LogoDashboard, ButtonLogoutDashboard, DivDadosDashboard, H3GreetingDashboard, PModuleDashboard, DivDevelopingApplication, H3Technologies, ButtonTechnologies, DivMenuTechonolgies, DivTechnologies, UlTechnologies, LiTechnologies, TitleTechnologies, StatusTechnologies, ButtonRemoveTechnologies, DivTitleStatus } from "./styles.js"
import { UserContext } from "../../providers/userProviders";
import { useContext } from "react"
import Modal from "../../components/modal";
import { TechContext } from "../../providers/techProvider";
import axios from "axios";

function Dashboard() {

    const his = useHistory()

    const { user } = useContext(UserContext)

    const { techs } = useContext(UserContext)

    const { show } = useContext(UserContext)

    const { setShow } = useContext(UserContext)

    const { deleteTech } = useContext(TechContext)

    return (
        <DivDashboard>
            <HeaderDashboard>
                <LogoDashboard>KenzieHub</LogoDashboard>
                <ButtonLogoutDashboard onClick={() => {
                    localStorage.clear()
                    his.push("/")
                }}>Sair</ButtonLogoutDashboard>
            </HeaderDashboard>
            <DivDadosDashboard>
                <H3GreetingDashboard>Olá, {user.name}</H3GreetingDashboard>
                <PModuleDashboard>{user.course_module}</PModuleDashboard>
            </DivDadosDashboard>
            <DivDevelopingApplication>
                <DivMenuTechonolgies>
                    <H3Technologies>Tecnologias</H3Technologies>
                    <ButtonTechnologies onClick={() => setShow(true)}>+</ButtonTechnologies>
                    <Modal show={show}></Modal>
                </DivMenuTechonolgies>
                <DivTechnologies>
                    {techs?.map((tech, index) => {
                        return (
                            <UlTechnologies key={index}>
                                <LiTechnologies>
                                    <DivTitleStatus>
                                        <TitleTechnologies>{tech.title}</TitleTechnologies>
                                        <StatusTechnologies>{tech.status}</StatusTechnologies>
                                    </DivTitleStatus>
                                    <ButtonRemoveTechnologies onClick={() => deleteTech(tech.id)}>Remover</ButtonRemoveTechnologies>
                                </LiTechnologies>
                            </UlTechnologies>
                        )
                    })}
                </DivTechnologies>
            </DivDevelopingApplication>
        </DivDashboard>
    )
}

export default Dashboard