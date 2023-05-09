import { Container, ImgCover, Form, Input, Button,
Erro, LabelTitulo, LabelInput, RodapeTermos, LinkText} from './styles'
import './styleComponents.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import logo from '../../assets/logo.png';
import logoAlt from '../../assets/logoalt.png'

export function Login() {
  const navigate = useNavigate();
  const [erros, setErros] = useState(null);

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
                    setErros(null)
                    navigate('/landing-page');
                } else {
                  setErros("Email ou senha inválidos");
                }
            });
        });
      } else {
        setErros("Preencha todos os campos para efetuar o login");
      }
  }

  return (
    <Container>
      <ImgCover>
        <div>
          <img style={{zIndex:2}} src={logoAlt} alt='Logo' />
        </div>
      </ImgCover>
      <Form>
        <LabelTitulo>ENTRAR COMO ESTUDANTE</LabelTitulo>
        <LabelInput>Email:</LabelInput>
        <Input
          placeholder='E-mail'
          type="email"
          id="email-login"
          onInput={handleEmail}
        ></Input>
        <LabelInput>Digite sua senha:</LabelInput>
        <Input
          placeholder='Senha'
          type="password"
          id="pass-login"
          onInput={handlePassword}
        ></Input>
        <LinkText>Esqueci a senha</LinkText>
        {erros != null ? <Erro>{erros}</Erro>  : null}
        <Button
          onClick={onSubmit}
        >ENTRAR</Button>
        <a style={{color:'black'}}>Não tem uma conta? </a><LinkText>Faça o cadastro</LinkText>

        <RodapeTermos>Ao fazer login, você concorda com os  
          <LinkText> Termos de Uso </LinkText> e 
          <LinkText> Política de Privacidade </LinkText>
          da plataforma.</RodapeTermos>
      </Form>
    </Container>
  )
}