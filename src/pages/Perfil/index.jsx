import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "../../components/LangSwitcher";
import SideMenu from "../../components/SideMenu";
import "./styles.css";
//import {logoalt} from "../../assets/logoalt.png";

export function Perfil() {
    // TO DO: Remember to translate do english all the static content from this page
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [showAdvancedMenu, isShowAdvancedMenu] = useState(false);
    const [showChangeEmail, isShowChangeEmail] = useState(false);

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
                <div className="text-gray-500 fill-gray-500 text-sm">
                    <p>O email atual é: XYZ</p>
                    <a>Insira um novo email:</a>
                    <br />
                    <a>Confirme o email:</a>
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
