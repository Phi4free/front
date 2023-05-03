import { Container, Img, Form, Input, Button } from './styles'
import { useNavigate } from "react-router-dom"
import { useState } from 'react';

export function Login() {
  const navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const options = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          "email": email,
          "senha": password
      }),
  };

  const handleEmail = (e) => {
      e.preventDefault();
      setEmail(e.target.value);
  };

  const handlePassword = (e) => {
      e.preventDefault();
      setPassword(e.target.value);
  };

  const onSubmit = e => {
      e.preventDefault();
      if(email != "" && password != "") {
        fetch('https://back-phi4free.vercel.app/authUser', options)
        .then((response) => {
            response.json().then((data) => {
                if(data.auth) {
                    localStorage.setItem("token", data.token);
                    console.log("Login realizado com sucesso");
                    navigate('/landing-page');
                } else {
                  console.log("Login inválido");
                }
            });
        });
      } else {
        console.log("Os campos de e-mail e senha não podem estar vazios");
      }
  }

  return (
    <Container>
      <Img></Img>
      <Form>
        <img src="src\assets\logo.png" />
        <Input
          placeholder='E-mail'
          type="email"
          id="email-login"
          onInput={handleEmail}
        ></Input>
        <Input
          placeholder='Senha'
          type="password"
          id="pass-login"
          onInput={handlePassword}
        ></Input>
        <Button
          onClick={onSubmit}
        >Login</Button>
      </Form>
    </Container>
  )
}