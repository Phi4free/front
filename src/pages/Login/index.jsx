import {
    Container,
    ContainerInput,
    ImgCover,
    Form,
    LabelTitulo,
    RodapeTermos,
    LinkText,
    CentralizedContainer,
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
import Popup from "../../components/Popup";
import BasicInput from "../../components/BasicInput";

export function Login() {
    const navigate = useNavigate();
    const [erros, setErros] = useState(null);
    const [loading, isLoading] = useState(false);

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let [recoverEmail, setRecoverEmail] = useState("");

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            senha: password,
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

    const handleRecoverEmail = (e) => {
        e.preventDefault();
        setRecoverEmail(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        isLoading(true);
        setErros(null);
        fetch(BASE_URL + "authUser", options)
            .then((response) => {
                response.json().then((data) => {
                    if (data.auth) {
                        localStorage.setItem("token", data.token);
                        setErros(null);
                        isLoading(false);
                        navigate("/landing-page");
                    } else {
                        isLoading(false);
                        setErros("Email ou senha inválidos");
                    }
                });
            })
            .catch((error) => {
                setErros(
                    "Ocorreu um erro ao efetuar o login. Por favor, tente novamente mais tarde"
                );
                console.log(error.message);
            });
    };

    return (
        <Container>
            <ImgCover>
                <div>
                    <img id="logo" src={logoAlt} alt="Logo" />
                </div>
            </ImgCover>
            <Form>
                <img
                    id="logo"
                    className="mobile"
                    src={logoAlt}
                    alt="Logo"
                    width="200px"
                    height="80px"
                />
                <LabelTitulo>ENTRAR COMO ESTUDANTE</LabelTitulo>
                <ContainerInput>
                    <DinamicInput
                        type="email"
                        id="email-login"
                        onInput={handleEmail}
                        label="Email:"
                    />
                </ContainerInput>
                <ContainerInput>
                    <DinamicInput
                        type="password"
                        id="pass-login"
                        onInput={handlePassword}
                        label="Senha:"
                    />
                </ContainerInput>
                <LinkText href="#forgot-password">Esqueci a senha</LinkText>
                <ContainerInput>
                    {erros != null ? (
                        <ErroText iconName="circle-exclamation" label={erros} />
                    ) : loading ? (
                        <Loading />
                    ) : null}
                </ContainerInput>
                <ContainerInput>
                    <PrimaryButton label="ENTRAR" onClick={onSubmit} />
                </ContainerInput>

                <p>
                    Não tem uma conta?{" "}
                    <LinkText onClick={() => navigate("/cadastro")}>
                        Faça o cadastro
                    </LinkText>
                </p>

                <RodapeTermos>
                    Ao fazer login, você concorda com os
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
            <Popup id="forgot-password" title="Recuperação de senha">
                <>
                    Esqueceu a senha? Não se preocupe, vamos te enviar um email
                    para ajudar a recuperar o acesso da sua conta!
                    <br />
                    <br />
                    <strong>
                        Digite o email da conta cadastrada:
                    </strong>
                    <br />
                    <br />
                    <CentralizedContainer>
                            <BasicInput
                                type="email"
                                id="email-recover"
                                onInput={handleRecoverEmail}
                                placeholder="emailCadastrado@email.com"
                            />
                        <br/>
                        <button
                            onClick={() =>
                                console.log(
                                    "Devia disparar email para " + recoverEmail
                                )
                            }
                        >
                            ENVIAR EMAIL
                        </button>
                    </CentralizedContainer>
                </>
            </Popup>
        </Container>
    );
}
