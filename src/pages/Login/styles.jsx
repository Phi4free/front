import styled from 'styled-components'

export const Container = styled.div `
  display: flex;
`

export const Img = styled.div `
  width: 50%;
  height: 100vh;
  background-image: url(https://images.pexels.com/photos/3747474/pexels-photo-3747474.jpeg?auto=compress&cs=tinysrgb&w=600);
  background-repeat: no-repeat;
  background-size: cover;
`

export const Form = styled.div `
  width: 50%;
  background-color: #0c0c0c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input `
  height: 30px;
  width: 350px;
  padding: 10px;
  margin: 20px;
  font-size: 20px;
`

export const Button = styled.button `
  background-color: #FCFE0C;
  color: #000;
  border: 0px;
  border-radius: 50px;
  width: 380px;
  padding: 15px;
  margin: 30px;
  font-size: 20px;
  font-weight: 600;
`