import React from "react";
import { Link } from "react-router-dom";
import Login from "../login";
import { useHistory } from "react-router-dom";
import { DivDashboard, HeaderDashboard, LogoDashboard, ButtonLogoutDashboard, DivDadosDashboard, H3GreetingDashboard, PModuleDashboard, DivDevelopingApplication, H3Developing, PDeveloping } from "./styles.js"

function Dashboard() {

    const his = useHistory()

    const userName = localStorage.getItem("@USERNAME")
    const userModule = localStorage.getItem("@USERMODULE")

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
                <H3GreetingDashboard>Olá, {userName}</H3GreetingDashboard>
                <PModuleDashboard>{userModule}</PModuleDashboard>
            </DivDadosDashboard>
            <DivDevelopingApplication>
                <H3Developing>Que pena! Estamos em desenvolvimento :(</H3Developing>
                <PDeveloping>Nossa aplicação está em desenvolvimento. Em breve teremos novidades!</PDeveloping>
            </DivDevelopingApplication>
        </DivDashboard>
    )
}

export default Dashboard