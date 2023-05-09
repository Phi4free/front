import { Container, ImgCover, Form, Input, Button,
Erro, LabelTitulo, LabelInput, RodapeTermos, LinkText, Loading} from './styles'
import './styleComponents.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import logo from '../../assets/logo.png';
import logoAlt from '../../assets/logoalt.png'

export function Login() {
  const navigate = useNavigate();
  const [erros, setErros] = useState(null);
  const [loading, isLoading] = useState(false);

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
      isLoading(true);
      setErros(null);
      if(email != "" && password != "") {
        fetch('https://back-phi4free.vercel.app/authUser', options)
        .then((response) => {
            response.json().then((data) => {
                if(data.auth) {
                    localStorage.setItem("token", data.token);
                    setErros(null)
                    isLoading(false)
                    navigate('/landing-page');
                } else {
                  isLoading(false)
                  setErros("Email ou senha inválidos");
                }
            });
        });
      } else {
        isLoading(false)
        setErros("Preencha todos os campos para efetuar o login")
      }
  }

  return (
    <Container>
      <ImgCover>
        <div>
          <img id='logo' src={logoAlt} alt='Logo' />
        </div>
      </ImgCover>
      <Form>
        <LabelTitulo>ENTRAR COMO ESTUDANTE</LabelTitulo>
        <LabelInput>Email:</LabelInput>
        <Input
          type="email"
          id="email-login"
          onInput={handleEmail}
        ></Input>
        <LabelInput>Senha:</LabelInput>
        <Input
          type="password"
          id="pass-login"
          onInput={handlePassword}
        ></Input>
        <LinkText>Esqueci a senha</LinkText>
        {erros != null ? <Erro>{erros}</Erro>  : loading ? <Loading/> : null}
        <Button
          onClick={onSubmit}
        >ENTRAR</Button>
        <p>Não tem uma conta? <LinkText>Faça o cadastro</LinkText></p>

        <RodapeTermos>Ao fazer login, você concorda com os  
          <LinkText> Termos de Uso </LinkText> e 
          <LinkText> Política de Privacidade </LinkText>
          da plataforma.</RodapeTermos>
      </Form>
    </Container>
  )
}