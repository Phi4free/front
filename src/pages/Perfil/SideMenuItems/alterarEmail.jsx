import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ErroText from "../../../components/ErroText";
import SideMenu from "../../../components/SideMenu";
import BasicInput from "../../../components/BasicInput";
import api from "../../../services/api";

export function AlterarEmail(props) {
    const { currentEmail, open, setOpen } = props;
    const { t } = useTranslation();
    const [newEmail, setNewEmail] = useState("");
    const [confirmNewEmail, setConfirmNewEmail] = useState("");
    const [erros, setErros] = useState(null);

    useEffect(() => {
        if (newEmail != confirmNewEmail && confirmNewEmail != "") {
            setErros("Os emails são diferentes");
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

    function updateEmail() {
        if (newEmail == confirmNewEmail && newEmail != "") {
            console.log("os emails são iguais");
            api.put("atualizarEmail", {
                email: newEmail,
            });
        } else {
            console.log("os emails são diferentes");
        }
    }

    return (
        <SideMenu
            title="ALTERAR EMAIL"
            options={null}
            open={open}
            setOpen={setOpen}
        >
            <div className="text-gray-500 mx-4">
                <p className="text-center">Seu email atual é: {currentEmail}</p>
                <br />
                <a>Insira um novo email:</a>
                <BasicInput
                    type="email"
                    id="email-change"
                    onInput={handleEmail}
                />
                <br />
                <a>Confirme o email:</a>
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
                ATUALIZAR EMAIL
            </button>
        </SideMenu>
    );
}
