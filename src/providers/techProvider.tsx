import { createContext } from "react";
import axios from "axios";
import { IUser, IUserProviderProps, ITechs } from "./userProviders";

interface ITechContext {
    addTech: (data: IUser) => void;
    deleteTech: (id: Number) => void;
}

export const TechContext = createContext<ITechContext>({} as ITechContext)


const TechProvider = ({ children }: IUserProviderProps) => {

    function addTech(data: IUser) {
        const token = localStorage.getItem("@TOKEN")
        console.log(data)
        axios.post<ITechs>("https://kenziehub.herokuapp.com/users/techs", data, { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => {
                console.log(response.data)
                alert("Tecnologia adicionada com sucesso!")
            })
            .catch((err) => {
                console.log(err)
                alert("Não foi possível adicionar a tecnologia!")
            })
    }

    function deleteTech(id: Number) {
        const token = localStorage.getItem("@TOKEN")
        axios.delete<ITechs>(`https://kenziehub.herokuapp.com/users/techs/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => {
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