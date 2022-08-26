import styled from "styled-components"

export const DivModal = styled.div`
width: 75vw;
height: 80vh;
display: flex;
flex-direction: column;
align-items: flex-start;
position: fixed;
z-index: 1;
margin-left: 15vw;
border-radius: 5px;

`

export const ModalHeader = styled.div`
background-color: #343B41;
display: flex;
justify-content: space-between;
align-items: center;
width: 75vw;
height: 8vh;

@media screen and (min-width: 769px){
width: 40vw;
margin-left: 16vw;
}
`

export const H3ModalHeader = styled.h3`
color: #F8F9FA;
font-size: 16px;
font-weight: 600;
margin-left: 2vh;
`

export const ButtonCloseModal = styled.button`
background-color: #212529;
color: #f8f9fa;
font-size: 14px;
margin-right: 2vh;
border: none;
border-radius: 5px;
height: 5vh;

@media screen and (min-width: 769px){
    cursor: pointer;
}
`

export const ModalBody = styled.div`
display: flex;
flex-direction: column;
background-color: #212529;
width: 71vw;
padding: 4vh 2vw;

@media screen and (min-width: 769px){
width: 36vw;
margin-left: 16vw;
}
`

export const ModalForm = styled.form`
display: flex;
flex-direction: column;
`

export const ModalLabel = styled.label`
display: flex;
flex-direction: column;
color: #f8f9fa;
margin-bottom: 3vh;
font-size: 12px;
`

export const ModalInput = styled.input`
background-color: #343B41;
margin-top: 1vh;
height: 6.5vh;
border-radius: 5px;
border: none;
color: #f8f9fa;
font-size: 16px;
`

export const ModalSelect = styled.select`
background-color: #343B41;
height: 6.5vh;
margin-top: 1vh;
border-radius: 5px;
border: none;
color: #f8f9fa;
font-size: 16px;
`

export const ModalButtonRegister = styled.button`
background-color: #FF577F;
height: 6.5vh;
color: #f8f9fa;
border-radius: 5px;
border: none;
font-size: 20px;

@media screen and (min-width: 769px) {
    cursor: pointer;
}
`