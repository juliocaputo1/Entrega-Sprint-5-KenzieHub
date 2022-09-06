import { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";

interface IUserContext {
    user: IUser;
    show: boolean;
    handleLogin: (data: IUser) => void;
    handleRegister: (data: IUser) => void;
    techs: ITechs;
    setShow: (show: boolean) => void;
}

export interface IUser {
    email: string;
    password: string;
    avatar_url?: string;
    bio: string;
    contact: string;
    course_module: string;
    created_at?: string;
    id: string;
    name: string;
    techs: ITechs;
    updated_at: string;
    workd?: string;
    onSubmitFunction: SubmitHandler<IUser>;
}

export interface ITechs {
    created_at: string;
    id: string;
    status: string;
    title: string;
    updated_at: string;
    map: (arg0: any) => void
}

interface IProfile {
    email: string;
    password: string;
    avatar_url?: string;
    bio: string;
    contact: string;
    course_module: string;
    created_at: string;
    id: string;
    name: string;
    techs: ITechs;
    updated_at: string;
    workd?: string;
    token: string;
}

interface ILogin {
    user: IUser;
    email: string;
    password: string;
    token: string;
}

export interface IUserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext<IUserContext>({} as IUserContext)

const UserProvider = ({ children }: IUserProviderProps) => {

    const [user, setUser] = useState<IUser>({} as IUser)

    const his = useHistory()

    const [techs, setTechs] = useState<ITechs>({} as ITechs)

    const [show, setShow] = useState<boolean>(false)

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        if (token) {
            axios.get<IUser>('https://kenziehub.herokuapp.com/profile', { headers: { "Authorization": `Bearer ${token}` } })
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

    function handleLogin(data: IUser) {
        axios.post<ILogin>("https://kenziehub.herokuapp.com/sessions", data)
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

    function handleRegister(data: IUser) {
        axios.post<IUser>("https://kenziehub.herokuapp.com/users", data)
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
        <UserContext.Provider value={{ handleLogin, handleRegister, user, techs, show, setShow }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider