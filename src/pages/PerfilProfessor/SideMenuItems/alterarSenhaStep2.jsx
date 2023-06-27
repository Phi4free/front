import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ErroText from "../../../components/ErroText";
import SideMenu from "../../../components/SideMenu";
import DinamicInput from "../../../components/DinamicInput";
import { ContainerInput, CentralizedContainer, LinkText } from "../style";
import Toast from "../../../components/Toast";
import api from "../../../services/api";

export function AlterarSenhaStep2(props) {
    const { open, setOpen, step1 } = props;
    const { t } = useTranslation();

    const [senhaPopup, setSenhaPopup] = useState(false);

    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setconfirmNewPassword] = useState("");
    const [erros, setErros] = useState(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
        checkPasswordFields();
    }, [newPassword, confirmNewPassword]);

    const handleNewPassword = (e) => {
        e.preventDefault();
        setNewPassword(e.target.value);
    };

    const handleConfirmNewPassword = (e) => {
        e.preventDefault();
        setconfirmNewPassword(e.target.value);
    };

    function checkPasswordFields() {
        if (newPassword != confirmNewPassword && confirmNewPassword != "") {
            setErros(t('errorRegister1'));
            return false;
        }
        setErros(null);
        return true;
    }

    function handleUpdatePassword() {
        if (!checkPasswordFields()) return;
        api.put("atualizarSenha", {
            senha: newPassword,
        })
            .then((response) => {
                switch (response.status) {
                    case 200:
                        response.json().then((data) => {
                            setOpen(false);
                            step1(false);
                            setMessage(data.message);
                            setNewPassword("");
                            setconfirmNewPassword("");
                            setSenhaPopup(true);
                });
                        break;
                    default:
                        response.json().then((data) => {setErros(data.message)});
                        break;
                }
            })
            .catch((error) => {
                setErros(t("errorRegister3"));
                console.log(error.message);
            });
    }

    return (
        <>
            <SideMenu
                title={t('altPass')}
                options={null}
                open={open}
                setOpen={setOpen}
            >
                <div className="text-gray-500">
                    <a>{t('newPass')}:</a>
                    <br />
                    <ContainerInput>
                        <DinamicInput
                            type="password"
                            id="pass-new"
                            onInput={handleNewPassword}
                            label={null}
                            value={newPassword}
                        />
                    </ContainerInput>
                    <br />
                    <a>{t('confirmNewPass')}:</a>
                    <br />
                    <ContainerInput>
                        <DinamicInput
                            type="password"
                            id="pass-new-confirm"
                            onInput={handleConfirmNewPassword}
                            label={null}
                            value={confirmNewPassword}
                        />
                    </ContainerInput>
                    <br />
                </div>
                {erros != null ? (
                    <ErroText iconName="circle-exclamation" label={erros} />
                ) : null}
                <button
                    className="w-9/12 inline-flex justify-center rounded-md py-2 text-sm shadow-sm sm:w-9/12 text-btnhover bg-btnprimary"
                    onClick={() => handleUpdatePassword()}
                >
                    {t('updatePass')}
                </button>
            </SideMenu>
            <Toast
                open={senhaPopup}
                setOpen={setSenhaPopup}
                message={message}
            />
        </>
    );
}
