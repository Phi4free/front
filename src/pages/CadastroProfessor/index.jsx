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

export function CadastroProfessor() {

    const { t } = useTranslation();

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
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
                <LabelTitulo className="font-bold text-2xl">{t('registerTeacher')}</LabelTitulo>
                <ContainerInput>
                <p>{t('registerInfo')}</p>
                </ContainerInput>
                <ul>
                    <li>
                    {t('registerInfo1')+" "}
                    <a href="https://phi4free.blogspot.com/" target="_blank">{t('carrers')}</a>
                    {" " + t('registerInfo1.2')}
                    </li>
                    <li>
                    {t('registerInfo2')}
                    </li>
                    <li>
                    {t('registerInfo3')}
                    </li>
                </ul>
                <ContainerInput>
                    <PrimaryButton label={t('btnSubscribe')} onClick={() => console.log("Abre processo")} />
                </ContainerInput>

                <p>
                    {t("yesAccount") + " "}
                    <LinkText onClick={() => navigate("/login-professor")}>
                        {t("login")}
                    </LinkText>
                </p>

                <RodapeTermos>
                    {t('registerTerms2')+" "}
                    <LinkText onClick={() => console.log("Deve abrir regulamento")}>
                        {" "+t('registerRules')+" "}
                    </LinkText>{" "}
                    {t('orConnective')}
                    <LinkText
                        onClick={() => console.log("Deve abrir FAQ")}
                    >
                        {" "}
                        FAQ{" "}
                    </LinkText>
                    {t('byPhi4Free')}
                </RodapeTermos>
                <br/>
                <LangSwitcher/>
            </Form>
        </Container>
    );
}
