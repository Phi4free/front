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
import { useTranslation } from "react-i18next";

export function Login() {
    const { t, i18n } = useTranslation();

    const lngs = {
        en: { nativeName: "English" },
        "pt-BR": { nativeName: "Português Brasileiro" },
    };

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
                        navigate("/home");
                    } else {
                        isLoading(false);
                        setErros(t("errorLogin1"));
                    }
                });
            })
            .catch((error) => {
                setErros(t("errorLogin2"));
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
                <LabelTitulo>{t('enterAsStudent')}</LabelTitulo>
                <ContainerInput>
                    <DinamicInput
                        type="email"
                        id="email-login"
                        onInput={handleEmail}
                        label={t('emailInput')}
                    />
                </ContainerInput>
                <ContainerInput>
                    <DinamicInput
                        type="password"
                        id="pass-login"
                        onInput={handlePassword}
                        label={t('passInput')}
                    />
                </ContainerInput>
                <LinkText href="#forgot-password">{t('forgotPass')}</LinkText>
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
                    <LinkText onClick={() => navigate("/cadastro-estudante")}>
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
                <br/>
                {Object.keys(lngs).map((lng) => (
                    <button
                        key={lng}
                        style={{
                            fontWeight:
                                i18n.resolvedLanguage === lng
                                    ? "bold"
                                    : "normal",
                        }}
                        type="submit"
                        onClick={() => i18n.changeLanguage(lng)}
                    >
                        {lngs[lng].nativeName}
                    </button>
                ))}
            </Form>
            <Popup id="forgot-password" title="Recuperação de senha">
                <>
                    Esqueceu a senha? Não se preocupe, vamos te enviar um email
                    para ajudar a recuperar o acesso da sua conta!
                    <br />
                    <br />
                    <strong>Digite o email da conta cadastrada:</strong>
                    <br />
                    <br />
                    <CentralizedContainer>
                        <BasicInput
                            type="email"
                            id="email-recover"
                            onInput={handleRecoverEmail}
                            placeholder="emailCadastrado@email.com"
                        />
                        <br />
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
