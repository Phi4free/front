import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ErroText from "../../../components/ErroText";
import SideMenu from "../../../components/SideMenu";
import BasicInput from "../../../components/BasicInput";
import api from "../../../services/api";
import Toast from "../../../components/Toast";

export function AlterarEmail(props) {
    const { currentEmail, open, setOpen } = props;
    const { t } = useTranslation();
    const [newEmail, setNewEmail] = useState("");
    const [confirmNewEmail, setConfirmNewEmail] = useState("");
    const [erros, setErros] = useState(null);
    const [message, setMessage] = useState();
    const [ShowToast, isShowToast] =
    useState(false);

    useEffect(() => {
        if (newEmail != confirmNewEmail && confirmNewEmail != "") {
            setErros(t('differentEmail'));
        } else {
            setErros(null);
        }
    }, [newEmail, confirmNewEmail]);

    const handleEmail = (e) => {
        e.preventDefault();
        setNewEmail(e.target.value);
    };

    const handleConfirmEmail = (e) => {
        e.preventDefault();
        setConfirmNewEmail(e.target.value);
    };

    function updateEmail() { // TO DO: Colocar mensagem mais evidente em caso de falha para atualizar o email!
        setMessage(null);
        if (newEmail == confirmNewEmail && newEmail != "") {
            api.put("atualizarEmail", {
                email: newEmail,
            })
                .then((response) => {
                    response.json().then((data) => {
                        setOpen(false);
                        isShowToast(true);
                        setConfirmNewEmail("");
                        setNewEmail("");
                        setMessage(data.message);
                    });
                })
                .catch((error) => {
                    setErros(t("errorRegister3"));
                    console.log(error.message);
                });
        } else {
            setErros(t('emptyEmail'));
        }
    }

    return (
        <>
            <Toast
                open={ShowToast}
                setOpen={isShowToast}
                iconName="wrench"
                message={message}
            />

            <SideMenu
                title={t('altEmail')}
                options={null}
                open={open}
                setOpen={setOpen}
            >
                <div className="text-gray-500 mx-4">
                    <p className="text-center">
                        {t('currentEmail')}{": "}{currentEmail}
                    </p>
                    <br />
                    <a>{t('insertNewEmail')}:</a>
                    <BasicInput
                        type="email"
                        id="email-change"
                        onInput={handleEmail}
                    />
                    <br />
                    <a>{t('confirmEmail')}:</a>
                    <BasicInput
                        type="email"
                        id="email-change-confirm"
                        onInput={handleConfirmEmail}
                    />
                    <br />
                    {erros != null ? (
                        <ErroText iconName="circle-exclamation" label={erros} />
                    ) : null}
                </div>
                <button
                    className="w-9/12 inline-flex justify-center rounded-md py-2 text-sm shadow-sm sm:w-9/12 text-btnhover bg-btnprimary"
                    onClick={() => updateEmail()}
                >
                    {t('updateEmail')}
                </button>
            </SideMenu>
        </>
    );
}
