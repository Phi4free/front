import styled from 'styled-components'

export const Container = styled.div `
  height: 100%;
  display: flex;
`
export const CentralizedContainer = styled.div `
  display:flex;
  flex-direction: column;
  justify-content: center;
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
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(107, 0, 173, 0.3)),
    url(https://images.pexels.com/photos/3769981/pexels-photo-3769981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
    background-repeat: no-repeat, no-repeat;
    background-size: cover, cover;
  }

  display:none;
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`

export const Form = styled.div `
  width: 100%;
  height: 100%;
  background-color: #1A1A1A;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    width: 45%;
  }
`

export const LabelTitulo = styled.h2 `
  padding: 2%;
  font-size: x-large;
  font-weight: 700;
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