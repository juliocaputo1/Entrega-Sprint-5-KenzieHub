import styled from "styled-components"

export const Container = styled.div`
    background-color: #121214;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    font-family: 'Inter', sans-serif
`

export const Logo = styled.h1`
margin-top: 20vh;
    color: #FF577F;
    font-size: 28px;
    font-weight: bold;

@media screen and (min-width: 769px){
    margin-top: 10vh;
    margin-bottom: 2vh;
}
`

export const DivLogin = styled.div`
background-color: #212529;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
height: 65vh;
margin: 2vh 3vw;
padding-top: 5vh;
border-radius: 5%;
color: white;
width: 90%;

@media screen and (min-width: 769px){
    width: 30%;
}
`

export const H3Login = styled.h3`
font-size: 16px;
margin-bottom: 3vh;
font-weight: 600;
`

export const FormLogin = styled.form`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 80%;
`

export const LabelLogin = styled.label`
display: flex;
flex-direction: column;
color: #F8F9FA;
font-size: 12px;
margin: 2vh 0;
`

export const InputLogin = styled.input`
background-color: #212529;
border: 1px solid #343B41;
width: 70vw;
height: 7vh;
margin-top: 2.5vh;
border-radius: 5%;
color: #F8F9FA;

@media screen and (min-width: 769px){
    width: 24vw;
}
`

export const ButtonEntrarLogin = styled.button`
background-color: #FF577F;
width: 72vw;
height: 7vh;
color: #F8F9FA;
border-radius: 5%;
margin-bottom: 2.5vh;

@media screen and (min-width: 769px){
    width: 24vw;
}
`

export const PCadastrarLogin = styled.p`
color:#868E96;
font-size: 12px;
margin-bottom: 2.5vh;
`

export const ButtonCadastarLogin = styled.button`
width: 41vh;
height: 7vh;
background-color: #868E96;
color: #F8F9FA;
border-radius: 5%;

@media screen and (min-width: 769px){
    width: 24vw;
}
`