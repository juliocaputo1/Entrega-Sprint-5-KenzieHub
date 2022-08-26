import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "./userProviders"
import { useContext } from "react"
import api from "../services/api";

export const TechContext = createContext({})

const TechProvider = ({ children }) => {

    const { techs } = useContext(UserContext)

    const { setTechs } = useContext(UserContext)

    function addTech(data) {
        const token = localStorage.getItem("@TOKEN")
        console.log(data)
        axios.post("https://kenziehub.herokuapp.com/users/techs", data, { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => {
                console.log(response.data)
                /*setTechs(...techs, response.data.techs)*/
                alert("Tecnologia adicionada com sucesso!")
            })
            .catch((err) => {
                console.log(err)
                alert("Não foi possível adicionar a tecnologia!")
            })
    }

    function deleteTech(id) {
        const token = localStorage.getItem("@TOKEN")
        axios.delete(`https://kenziehub.herokuapp.com/users/techs/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => {
                /*setTechs(techs.filter((response) => {
                    return (techs !== response.data.techs)
                }))*/
                alert("Tecnologia removida com sucesso!")
            })
            .catch((err) => {
                console.log(err)
                alert("Não foi possível remover a tecnologia!")
            })
    }

    return (
        <TechContext.Provider value={{ addTech, deleteTech }}>
            {children}
        </TechContext.Provider>
    )
}

export default TechProvider