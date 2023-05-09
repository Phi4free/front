import styled from 'styled-components'

export const Container = styled.div `
  display: flex;
`

export const ImgCover = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55%;
  height: 100vh;
  background-image: url(https://images.pexels.com/photos/3747474/pexels-photo-3747474.jpeg?auto=compress&cs=tinysrgb&w=600, 0.5);
  background-repeat: no-repeat;
  background-size: cover;
`

export const Form = styled.div `
  width: 45%;
  background-color: white;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input `
width: 80%;
padding: 3%;
font-size: 100%;
border-radius: 2vh;
border: solid #0F0F0F;
background-color: white;
color: black;
`

export const Button = styled.button `
  background-color: #FFC300;
  color: #000;
  width: 87%;
  margin-top: 8%;
  padding: 3%;
  font-size: 100%;
  border-radius: 2vh;
  border: solid black;
  font-weight: 600;
`

export const Erro = styled.a `
  color: #9F0000;
`

export const LabelTitulo = styled.h2 `
  color: #000814;
`

export const LabelInput = styled.p `
  color: #0F0F0F;
  display: flex;
  width: 87%;
  font-weight: 600;
  margin-top: 4%;
  margin-bottom: 2%;
  
`