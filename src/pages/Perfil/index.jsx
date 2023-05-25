import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "../../components/LangSwitcher";
import ErroText from "../../components/ErroText";
import SideMenu from "../../components/SideMenu";
import BasicInput from "../../components/BasicInput";
import "./styles.css";
//import {logoalt} from "../../assets/logoalt.png";

export function Perfil() {
    // TO DO: Remember to translate do english all the static content from this page
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [newEmail, setNewEmail] = useState("");
    const [confirmNewEmail, setConfirmNewEmail] = useState("");
    const [erros, setErros] = useState(null);
    const [showAdvancedMenu, isShowAdvancedMenu] = useState(false);
    const [showChangeEmail, isShowChangeEmail] = useState(false);

    useEffect(() => {
        if (newEmail != confirmNewEmail && confirmNewEmail != "") {
            setErros("Os emails são diferentes");
        } else {
            setErros(null);
        }
    }, [newEmail, confirmNewEmail]);

    const opcoesAvancadas = {
        email: {
            label: "Alterar email",
            acao: () => {
                isShowChangeEmail(true);
            },
        },
        senha: {
            label: "Alterar senha",
            acao: () => {
                console.log("handle: Alterar senha");
            },
        },
        segConta: {
            label: "Segurança & Conta",
            acao: () => {
                console.log("handle: Segurança & Conta");
            },
        },
        logout: {
            label: "Logout",
            acao: () => {
                console.log("handle: Fazer logout");
            },
        },
    };

    const handleEmail = (e) => {
        e.preventDefault();
        setNewEmail(e.target.value);
    };

    const handleConfirmEmail = (e) => {
        e.preventDefault();
        setConfirmNewEmail(e.target.value);
    };

    return (
        <>
            <br />
            <div className="flex justify-between">
                <a className="username">
                    {localStorage.getItem("username") ||
                        "Usuário não encontrado"}
                </a>
                <div className="edit-btns">
                    <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => isShowAdvancedMenu(!showAdvancedMenu)}
                    >
                        OPÇÕES AVANÇADAS
                    </button>
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto bg-btnsecondary"
                        onClick={() => console.log("Editar perfil")}
                    >
                        EDITAR
                    </button>
                </div>
            </div>
            <SideMenu
                title="OPÇÕES AVANÇADAS"
                options={opcoesAvancadas}
                open={showAdvancedMenu}
                setOpen={isShowAdvancedMenu}
            />
            <SideMenu
                title="ALTERAR EMAIL"
                options={null}
                open={showChangeEmail}
                setOpen={isShowChangeEmail}
            >
                <div className="text-gray-500">
                    <p>Seu email atual é: email@email.com</p>
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
                    className="inline-flex justify-center rounded-md py-2 text-sm shadow-sm sm:w-9/12 text-btnhover bg-btnprimary"
                    onClick={() => console.log("update email")}
                >
                    ATUALIZAR EMAIL
                </button>
            </SideMenu>
        </>
    );
}
