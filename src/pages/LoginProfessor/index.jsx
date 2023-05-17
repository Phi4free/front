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
import { LangSwitcher } from "../../components/LangSwitcher";

export function LoginProfessor() {
    const { t } = useTranslation();

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
            fetch(BASE_URL + "authUser", options).then(
                (response) => {
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
                }
            ).catch(
                (error) => {
                    setErros(t("errorLogin2"));
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
                <LabelTitulo>{t('enterAsTeacher')}</LabelTitulo>
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
                    <PrimaryButton label={t('enter')} onClick={onSubmit} />
                </ContainerInput>

                <p>
                    {t('noAccount')+" "}
                    <LinkText
                        onClick={() => navigate('/cadastro-professor')}
                    >
                    {t('register')}
                    </LinkText>
                </p>

                <RodapeTermos>
                    {t('loginTerms1')}
                    <LinkText onClick={() => console.log("Deve abrir /termos")}>
                        {" "+t('terms')+" "}
                    </LinkText>{" "}
                    {t('andConnective')}
                    <LinkText
                        onClick={() => console.log("Deve abrir /privacidade")}
                    >
                        {" "+t('privacy')+" "}
                    </LinkText>
                    {t('loginTerms2')}
                </RodapeTermos>
                <br/>
                <LangSwitcher/>
            </Form>
            <Popup id="forgot-password" title={t('passRecover')}>
                <>
                    {t('passRecover1')}
                    <br />
                    <br />
                    <strong>
                        {t('passRecover2')}
                    </strong>
                    <br />
                    <br />
                    <CentralizedContainer>
                            <BasicInput
                                type="email"
                                id="email-recover"
                                onInput={handleRecoverEmail}
                                placeholder={t('passRecoverEmail')}
                            />
                        <br/>
                        <button
                            onClick={() =>
                                console.log(
                                    "Devia disparar email para " + recoverEmail
                                )
                            }
                        >
                            {t('sendEmail')}
                        </button>
                    </CentralizedContainer>
                </>
            </Popup>
        </Container>
    );
}
