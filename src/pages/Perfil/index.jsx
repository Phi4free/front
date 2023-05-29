import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "../../components/LangSwitcher";
import ErroText from "../../components/ErroText";
import SideMenu from "../../components/SideMenu";
import BasicInput from "../../components/BasicInput";
import "./styles.css";
import { AlterarEmail } from "./SideMenuItems/alterarEmail";
import { AlterarSenha } from "./SideMenuItems/alterarSenha";
import Toast from "../../components/Toast";
import { Logout } from "./SideMenuItems/fazerLogout";
//import {logoalt} from "../../assets/logoalt.png";

export function Perfil() {
    // TO DO: Remember to translate do english all the static content from this page
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [showAdvancedMenu, isShowAdvancedMenu] = useState(false);
    const [showChangeEmail, isShowChangeEmail] = useState(false);
    const [showChangePassword, isShowChangePassword] = useState(false);
    const [showLogout, isShowLogout] = useState(false);
    const [showUnderConstructionToast, isShowUnderConstructionToast] = useState(false);

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
                isShowChangePassword(true);
            },
        },
        segConta: {
            label: "Segurança & Conta",
            acao: () => {
                isShowUnderConstructionToast(true);
            },
        },
        logout: {
            label: "Logout",
            acao: () => {
                isShowLogout(true);
            },
        },
    };

    return (
        <>
            <br />
            <div className="md:block lg:flex justify-between">
                <a className="username">
                    {localStorage.getItem("username") ||
                        "Usuário não encontrado"}
                </a>
                <div className="flex items-end justify-end mx-4">
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
            <AlterarEmail open={showChangeEmail} setOpen={isShowChangeEmail}/>
            <AlterarSenha open={showChangePassword} setOpen={isShowChangePassword}/>
            <Logout open={showLogout} setOpen={isShowLogout}/>
            <Toast 
            open={showUnderConstructionToast} 
            setOpen={isShowUnderConstructionToast} 
            iconName="wrench"
            message="Desculpe! Esta opção ainda não está disponível"/>
        </>
    );
}
