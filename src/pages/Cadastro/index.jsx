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
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "../../components/LangSwitcher";

export function Cadastro() {
    const { t } = useTranslation();

    const navigate = useNavigate();
    const [erros, setErros] = useState(null);
    const [loading, isLoading] = useState(false);

    let [nome, setNome] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

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
        if (e.target.value != password) {
            setErros(t("errorRegister1"));
        } else {
            setErros(null);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        isLoading(true);
        setErros(null);
        api.post("criarPerfil", {
            nome: nome,
            email: email,
            senha: password,
        })
            .then((response) => {
                response.json().then((data) => {
                    if (data.auth) {
                        localStorage.setItem("token", data.token);
                        setErros(null);
                        isLoading(false);
                        navigate("/home");
                    } else {
                        isLoading(false);
                        setErros(t("errorRegister2"));
                    }
                });
            })
            .catch((error) => {
                setErros(t("errorRegister3"));
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
                <LabelTitulo className="font-bold text-2xl">
                    {t("registerStudent")}
                </LabelTitulo>
                <ContainerInput>
                    <DinamicInput
                        type="text"
                        id="nome"
                        onInput={handleNome}
                        label={t("nameInput")}
                    />
                </ContainerInput>
                <ContainerInput>
                    <DinamicInput
                        type="email"
                        id="email-cadastro"
                        onInput={handleEmail}
                        label={t("emailInput")}
                    />
                </ContainerInput>
                <ContainerInput>
                    <DinamicInput
                        type="password"
                        id="pass-cadastro"
                        onInput={handlePassword}
                        label={t("passInput")}
                    />
                </ContainerInput>
                <ContainerInput>
                    <DinamicInput
                        type="password"
                        id="pass-confirm-cadastro"
                        onInput={handleConfirmPassword}
                        label={t("confirmPassInput")}
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
                    <PrimaryButton
                        label={t("createAccount")}
                        onClick={onSubmit}
                    />
                </ContainerInput>

                <p>
                    {t("yesAccount") + " "}
                    <LinkText onClick={() => navigate("/login-estudante")}>
                        {t("login")}
                    </LinkText>
                </p>

                <RodapeTermos>
                    {t("registerTerms1")}
                    <LinkText onClick={() => console.log("Deve abrir /termos")}>
                        {" " + t("terms") + " "}
                    </LinkText>{" "}
                    e
                    <LinkText
                        onClick={() => console.log("Deve abrir /privacidade")}
                    >
                        {" " + t("privacy") + " "}
                    </LinkText>
                    {t("loginTerms2")}
                </RodapeTermos>
                <br />
                <LangSwitcher />
            </Form>
        </Container>
    );
}
