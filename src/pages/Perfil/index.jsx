import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "../../components/LangSwitcher";
import SideMenu from "../../components/SideMenu";
import "./styles.css"
//import {logoalt} from "../../assets/logoalt.png";

export function Perfil() {
    // TO DO: Remember to translate do english all the static content from this page
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [showAdvancedMenu, isShowAdvancedMenu] = useState(false);

    const opcoesAvancadas = {
        email: {
            label: "Alterar email",
            acao: () => {
                console.log("handle: Alterar email");
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
            <div className="edit-btns">
                <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => isShowAdvancedMenu(true)}
                >
                    Opções avançadas
                </button>
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto bg-btnsecondary"
                    onClick={() => console.log("Editar perfil")}
                >
                    Editar
                </button>
            </div>
            {showAdvancedMenu ? (
                <SideMenu
                    title="OPÇÕES AVANÇADAS"
                    options={opcoesAvancadas}
                    keepOnMenu={isShowAdvancedMenu}
                />
            ) : null}
        </>
    );
}
