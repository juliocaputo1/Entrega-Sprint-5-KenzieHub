import styled from "styled-components"

export const ContainerRegister = styled.div`
background-color: #121214;
height: 150vh;
padding: 7vh 3vw;
font-family: "Inter", sans-serif;

@media screen and (min-width: 769px){
    background-color: #121214;
    height: 150vh;
    padding: 7vh 3vw;
    font-family: "Inter", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`

export const HeaderRegister = styled.header`
display: flex;
justify-content: space-between;
margin-bottom: 5vh;

@media screen and (min-width: 769px){
    display: flex;
    justify-content: space-evenly;
    width: 80vw;
    margin: 0 10vw;
    margin-bottom: 5vh
}
`

export const LogoRegister = styled.h1`
color: #FF577F;
font-size: 20px;
font-weight: bold;
`
export const ButtonLogoutDashboard = styled.button`
background-color: #212529;
border: none;
border-radius: 5%;
color: #F8F9FA;
width: 16vw;
height: 5vh;

@media screen and (min-width: 769px){
    width: 8vw;
    cursor: pointer;
}
`
export const ContainerFormRegister = styled.div`
background-color: #212529;
height: 130vh;
border-radius: 1%;
padding: 5vh 2vw;
display: flex;
align-items: center;
flex-direction: column;

@media screen and (min-width: 769px){
    width: 33vw;
}
`

export const H3Register = styled.h3`
color: #F8F9FA;
font-weight: 600;
font-size: 16px;
margin-bottom: 3vh;
`

export const PRegsiter = styled.p`
color: #868E96;
font-size: 12px;
margin-bottom: 3vh;
`

export const FormRegister = styled.form`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`

export const LabelRegister = styled.label`
display: flex;
flex-direction: column;
color: #F8F9FA;
font-size: 12px;
margin: 2vh 0;
`

export const InputRegister = styled.input`
background-color: #212529;
border: 1px solid #343B41;
width: 70vw;
height: 7vh;
margin-top: 2.5vh;
border-radius: 5%;
color: #F8F9FA;

@media screen and (min-width: 769px){
    width: 30vw;
}
`

export const SelectRegister = styled.select`
background-color: #212529;
border: 1px solid #343B41;
width: 72vw;
height: 7vh;
margin-top: 2.5vh;
border-radius: 5%;
color: #F8F9FA;

@media screen and (min-width: 769px){
    width: 30vw;
    cursor: pointer;
}
`

export const ButtonRegister = styled.button`
width: 41vh;
height: 7vh;
background-color: #59323F;
color: #F8F9FA;
border-radius: 5%;

@media screen and (min-width: 769px){
    width: 30vw;
    cursor: pointer;
}
`