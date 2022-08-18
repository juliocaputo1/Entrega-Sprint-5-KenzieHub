import styled from "styled-components"

export const DivDashboard = styled.div`
font-family: 'Inter', sans-serif;
`

export const HeaderDashboard = styled.header`
display:flex;
justify-content: space-between;
align-items: center;
width: 92%;
background-color: #121214;
padding-right: 4vw;
padding-left: 4vw;
height: 10vh;
border-bottom: 1px solid #212529;

@media screen and (min-width: 769px){
    display:flex;
    justify-content: space-evenly;
}
`

export const LogoDashboard = styled.h1`
color: #FF577F;
font-size: 18px;
font-weight: bold;

@media screen and (min-width: 769px){
    margin-right: 13vw;
}
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
}
`

export const DivDadosDashboard = styled.div`
background-color: #121214;
height: 25vh;
display: flex;
justify-content: center;
align-items:  flex-start;
flex-direction: column;
border-bottom: 1px solid #212529;

@media screen and (min-width: 769px){
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 20vh;
    align-items: center;
    width: 100vw;
}
`

export const H3GreetingDashboard = styled.h3`
color: white;
font-size: 20px;
padding-left: 5vw;
margin-bottom: 2vh;
font-weight: bold;

@media screen and (min-width: 769px){
    padding-left: 0;
}
`

export const PModuleDashboard = styled.p`
padding-left: 5vw;
color: #868E96;
font-size: 12px;
`

export const DivDevelopingApplication = styled.div`
background-color: #121214 ;
height: 80.7vh;

@media screen and (min-width: 769px){
    display: flex;
    flex-direction: column;
}
`
export const H3Developing = styled.h3`
display: none;

@media screen and (min-width: 769px){
    display: flex;
    display: flex;
    margin: 5vh 25vw;
    color: #F8F9FA
}
`

export const PDeveloping = styled.p`
display: none;

@media screen and (min-width: 769px){
    display: flex;
    margin: 5vh 25vw;
    color: #F8F9FA;
}
`