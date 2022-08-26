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
    cursor: pointer;
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
display: flex;
flex-direction: column;

@media screen and (min-width: 769px){
    display: flex;
}
`

export const DivMenuTechonolgies = styled.div`
display: flex;
justify-content: space-between;
`

export const H3Technologies = styled.h3`
display: flex;
padding-left: 5vw;
color: #F8F9FA;
padding-top: 3vh;
font-weight: bold;
font-size: 20px;

@media screen and (min-width: 769px){
    display: flex;
    margin: 5vh 18vw;
    color: #F8F9FA;
    font-weight: bold;
}
`

export const ButtonTechnologies = styled.button`
display: flex;
margin-right: 5vw;
margin-top:1.5vh;
color: #ffffff;
background-color: #212529;
height: 6vh;
justify-content: center;
align-items: center;
font-size: 22px;
border-radius: 5px;
width: 10vw;
border: none;

@media screen and (min-width: 769px){
    display: flex;
    margin: 5vh;
    margin-right: 22vw;
    background-color: #212529;
    border: none;
    color: #ffffff;
    height: 5vh;
    align-items: center;
    width: 2.5vw;
    justify-content: center;
    font-size: 22px;
    border-radius: 5px;
    cursor: pointer;
}
`
export const DivTechnologies = styled.div`
background-color: #212529;
margin: 4vh 5vw;
padding-top: 5vh;
padding-bottom: 5vh;
display: flex;
flex-direction: column;
justify-content: space-between;

@media screen and (min-width: 769px){
    background-color: #212529;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 23vw;
    width: 54vw;
    border-radius: 5px;
}
`

export const UlTechnologies = styled.ul`
display: flex;
justify-content: space-between;
margin-bottom: 4vh;
background-color: #121214;
margin-left: 3vw;
margin-right: 3vw;
border-radius: 5px;

@media screen and (min-width: 769px){
    display: flex;
    justify-content: space-between;
    background-color: #121214;
    border-radius: 5px;
}
`

export const LiTechnologies = styled.li`
display: flex;
justify-content: space-between;
flex-direction: row;
width: 100%;
height: 8vh; 
align-items: center;

@media screen and (min-width: 769px){
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    align-items: center; 
}
`

export const DivTitleStatus = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

@media screen and (min-width: 769px){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
`

export const TitleTechnologies = styled.h3`
color: #F8F9FA;
font-size: 20px;
font-weight: bold;
padding-right: 2vw;
margin-left: 4vw;

@media screen and (min-width: 769px){
    color: #F8F9FA;
    font-size: 20px;
    font-weight: bold;
    padding-right: 1vw;
    margin-left: 2vw;
}
`

export const StatusTechnologies = styled.p`
color:#868E96;
font-size: 12px;

@media screen and (min-width: 769px){
    color:#868E96;
    font-size: 12px;
}
`

export const ButtonRemoveTechnologies = styled.button`
background-color: #212529;
color: #f8f9fa;
border: none;
border-radius: 5px;
height: 6vh;
width: 20vw;
margin-right: 2vw;

@media screen and (min-width: 769px){
    background-color: #212529;
    color: #f8f9fa;
    border: none;
    border-radius: 5px;
    height: 6vh;
    width: 8vw;
    margin-right: 1vw;
    cursor: pointer;
}
`