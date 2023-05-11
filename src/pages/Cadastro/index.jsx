import {
    Container,
    ContainerInput,
    ImgCover,
    Form,
    LabelTitulo,
    RodapeTermos,
    LinkText,
} from "./styles";
import DinamicInput from "../../components/DinamicInput";
import { Loading } from "../../components/Loading/styles";
import "./styleComponents.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logoAlt from "../../assets/logoalt.png";
import PrimaryButton from "../../components/PrimaryButton";
import ErroText from "../../components/ErroText";
import { BASE_URL } from "../../services/api";

export function Cadastro() {
    const navigate = useNavigate();
    const [erros, setErros] = useState(null);
    const [loading, isLoading] = useState(false);

    let [nome, setNome] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: password,
        }),
    };

    const handleNome = (e) => {
        e.preventDefault();
        setNome(e.target.value);
    };

    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    };

    const handleConfirmPassword = (e) => {
        e.preventDefault();
        if(e.target.value != password){
            setErros("As senhas são diferentes");
        } else {
            setErros(null);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        isLoading(true);
        setErros(null);
            fetch(BASE_URL + "criarPerfil", options).then(
                (response) => {
                    response.json().then((data) => {
                        if (data.auth) {
                            localStorage.setItem("token", data.token);
                            setErros(null);
                            isLoading(false);
                            navigate("/landing-page");
                        } else {
                            isLoading(false);
                            setErros("Erro de validação (especificar)");
                        }
                    });
                }
            ).catch(
                (error) => {
                setErros("Ocorreu um erro ao efetuar o cadastro. Por favor, tente novamente mais tarde")
                console.log(error.message)
                }
            )
    };

    return (
        <Container>
            <ImgCover>
                <div>
                    <img id="logo" src={logoAlt} alt="Logo" />
                </div>
            </ImgCover>
            <Form>
                <img id="logo" className="mobile" src={logoAlt} alt="Logo" width="200px" height="80px" />
                <LabelTitulo>CRIAR CONTA DE ESTUDANTE</LabelTitulo>
                <ContainerInput>
                    <DinamicInput
                        type="text"
                        id="nome"
                        onInput={handleNome}
                        label="Nome Completo:"
                    />
                </ContainerInput>
                <ContainerInput>
                    <DinamicInput
                        type="email"
                        id="email-cadastro"
                        onInput={handleEmail}
                        label="Email:"
                    />
                </ContainerInput>
                <ContainerInput>
                    <DinamicInput
                        type="password"
                        id="pass-cadastro"
                        onInput={handlePassword}
                        label="Senha:"
                    />
                </ContainerInput>
                <ContainerInput>
                    <DinamicInput
                        type="password"
                        id="pass-confirm-cadastro"
                        onInput={handleConfirmPassword}
                        label="Confirme a senha:"
                    />
                </ContainerInput>
                <ContainerInput>
                {erros != null ? (
                    <ErroText iconName="circle-exclamation" label={erros} />
                ) : loading ? (
                    <Loading />
                ) : null}
                </ContainerInput>
                <ContainerInput>
                    <PrimaryButton label="CRIAR CONTA" onClick={onSubmit} />
                </ContainerInput>

                <p>
                    Já tem uma conta?{" "}
                    <LinkText
                        onClick={() => navigate('/')}
                    >
                        Faça o login
                    </LinkText>
                </p>

                <RodapeTermos>
                    Ao fazer cadastro, você concorda com os
                    <LinkText onClick={() => console.log("Deve abrir /termos")}>
                        {" "}
                        Termos de Uso{" "}
                    </LinkText>{" "}
                    e
                    <LinkText
                        onClick={() => console.log("Deve abrir /privacidade")}
                    >
                        {" "}
                        Política de Privacidade{" "}
                    </LinkText>
                    da plataforma.
                </RodapeTermos>
            </Form>
        </Container>
    );
}
