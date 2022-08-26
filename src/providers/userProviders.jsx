import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const UserContext = createContext({})

const UserProvider = ({ children }) => {

    const [user, setUser] = useState({})

    const his = useHistory()

    const [techs, setTechs] = useState([])

    const [show, setShow] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        if (token) {
            axios.get('https://kenziehub.herokuapp.com/profile', { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    setUser(response.data)
                    setTechs(response.data.techs)
                })
                .catch((err) => {
                    localStorage.clear()
                    console.log(err)
                    his.push("/")
                })
        }
    }, [user])

    function handleLogin(data) {
        axios.post("https://kenziehub.herokuapp.com/sessions", data)
            .then((response) => {
                console.log(response.data)
                localStorage.clear()
                localStorage.setItem("@TOKEN", response.data.token)
                localStorage.setItem("@USERID", response.data.user.id)
                setUser(response.data.user)
                alert("Login feito com sucesso! ")
                his.push("/dashboard")
                setTechs(response.data.user.techs)
            })
            .catch((err) => {
                console.log(err)
                alert("Não foi possível fazer o login!")
            });
    }

    function handleRegister(data) {
        axios.post("https://kenziehub.herokuapp.com/users", data)
            .then((response) => {
                console.log(response.data)
                his.push("/")
                alert("Usuário cadastrado com sucesso!")
            })
            .catch((err) => {
                console.log(err)
                alert("Não foi possível cadastrar o usuário!")
            });
    }

    return (
        <UserContext.Provider value={{ handleLogin, handleRegister, user, techs, show, setShow, setTechs }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider