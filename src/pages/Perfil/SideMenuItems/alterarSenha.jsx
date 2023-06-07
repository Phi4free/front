import { useState } from "react";
import { useTranslation } from "react-i18next";
import api from "../../../services/api";
import ErroText from "../../../components/ErroText";
import SideMenu from "../../../components/SideMenu";
import DinamicInput from "../../../components/DinamicInput";
import BasicInput from "../../../components/BasicInput";
import Popup from "../../../components/Popup";
import { ContainerInput, CentralizedContainer, LinkText } from "../style";
import { AlterarSenhaStep2 } from "./alterarSenhaStep2";

export function AlterarSenha(props) {
    const { currentEmail, open, setOpen } = props;
    const { t } = useTranslation();

    const [currentPassword, setCurrentPassword] = useState("");
    const [senhaPopup, setSenhaPopup] = useState(false);
    const [recoverEmail, setRecoverEmail] = useState("");
    const [verifiedCurrentPassword, isVerifiedCurrentPassword] = useState(false);
    const [erros, setErros] = useState(null);

    const handleCurrentPassword = (e) => {
        e.preventDefault();
        setCurrentPassword(e.target.value);
    };

    const handleRecoverEmail = (e) => {
        e.preventDefault();
        setRecoverEmail(e.target.value);
    };

    function verifyCurrentPassword(){
        if(currentPassword == "") {
            setErros(t("blankInput"));
            return;
        }
        api.post("authUser", {
            email: currentEmail,
            senha: currentPassword,
        })
            .then((response) => {
                response.json().then((data) => {
                    if (data.auth) {
                        localStorage.setItem("username", data.username);
                        localStorage.setItem("token", data.token);
                        isVerifiedCurrentPassword(true);
                        setCurrentPassword("");
                        setErros(null);
                    } else {
                        setErros("Senha inválida");
                        console.log(data.message)
                    }
                });
            })
            .catch((error) => {
                setErros(t("errorAuth"));
                console.log(error.message);
            });
    }

    return (
        <>
        <SideMenu
            title="ALTERAR SENHA"
            options={null}
            open={open}
            setOpen={setOpen}
        >
            <div className="text-gray-500">
                <a className="text-center">Digite sua senha atual:</a>
                <br /><br/>
                <ContainerInput>
                    <DinamicInput
                        type="password"
                        id="pass-current"
                        onInput={handleCurrentPassword}
                        label={null}
                        value={currentPassword}
                    />
                </ContainerInput>
                <LinkText onClick={() => setSenhaPopup(true)}>
                    {t("forgotPass")}
                </LinkText>
            </div>
            {erros != null ? (
                <ErroText iconName="circle-exclamation" label={erros} />
            ) : null}
            <button
                className="w-9/12 inline-flex justify-center rounded-md py-2 text-sm shadow-sm sm:w-9/12 text-btnhover bg-btnprimary"
                onClick={() => verifyCurrentPassword()}
            >
                CONTINUAR
            </button>
        </SideMenu>
        <Popup
        id="forgot-password"
        title={t("passRecover")}
        actionName={t("sendEmail")}
        action={() => {
            if (recoverEmail != "") {
                console.log(
                    "Devia disparar email para " + recoverEmail
                );
                setRecoverEmail("");
                return true;
            }
            return false;
        }}
        open={senhaPopup}
        setOpen={setSenhaPopup}
    >
        <>
            {t("passRecover1")}
            <br />
            <br />
            <strong>{t("passRecover2")}</strong>
            <br />
            <br />
            <CentralizedContainer>
                <BasicInput
                    type="email"
                    id="email-recover"
                    onInput={handleRecoverEmail}
                    placeholder={t("passRecoverEmail")}
                />
                <br />
            </CentralizedContainer>
        </>
    </Popup>
    <AlterarSenhaStep2 open={verifiedCurrentPassword} setOpen={isVerifiedCurrentPassword} step1={setOpen}/>
    </>
    );
}
