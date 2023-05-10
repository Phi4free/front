import styled from 'styled-components'

export const Container = styled.div `
  display: flex;
`

export const ContainerInput = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-bottom: 2%;
`

export const ImgCover = styled.div `
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55%;
  height: 100vh;

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-image: url(https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.5;
  }
`

export const Form = styled.div `
  width: 45%;
  background-color: #1A1A1A;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LabelTitulo = styled.h2 `
  padding: 2%;
`

export const RodapeTermos = styled.p `
  font-size: smaller;
  text-align: center;
  padding-top: 4%;
  margin: 0% 16%;
`

export const LinkText = styled.a `
  color: #C880B7;
  cursor: pointer;
`