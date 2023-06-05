import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "../../components/LangSwitcher";
import ErroText from "../../components/ErroText";
import SideMenu from "../../components/SideMenu";
import "./styles.css";
import { AlterarEmail } from "./SideMenuItems/alterarEmail";
import { AlterarSenha } from "./SideMenuItems/alterarSenha";
import Toast from "../../components/Toast";
import { Logout } from "./SideMenuItems/fazerLogout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import api from "../../services/api";
import { fetchUserData } from "./userConstructor";

// MEU PERFIL - Exibe o perfil do usuário logado
export function Perfil() {
    // TO DO: Remember to translate do english all the static content from this page
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [loading, isLoading] = useState(false); //later on, implement loading animation
    const [showAdvancedMenu, isShowAdvancedMenu] = useState(false);
    const [showChangeEmail, isShowChangeEmail] = useState(false);
    const [showChangePassword, isShowChangePassword] = useState(false);
    const [showLogout, isShowLogout] = useState(false);
    const [showUnderConstructionToast, isShowUnderConstructionToast] =
        useState(false);
    const [user, setUser] = useState(null);

    /**
     * Faz o fetch das informações do perfil do usuário 1x quando inicializado;
     * Após isso, vai refazer o fetch sempre que ele abrir e fechar os menus de configuração, para garantir
     * que caso alguma informação foi alterada, ela será atualizada imediatamente após concluir as edições
     */

    useEffect(() => {
        fetchUserData().then((data) => setUser(data));
    }, [showAdvancedMenu, !showAdvancedMenu]);

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
            <div className="py-2">
                <div className="flex items-end justify-end mx-4">
                    <button
                        type="button"
                        className="border-1 border-solid border-primary hover:border-transparent px-2 py-1 text-sm text-primary"
                        onClick={() => isShowUnderConstructionToast(true)}
                    >
                        RANKING
                    </button>
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md text-btnhover px-3 py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto bg-btnprimary"
                        onClick={() => isShowUnderConstructionToast(true)}
                    >
                        PHISTORE
                    </button>
                </div>
            </div>
            <div className="md:block lg:flex justify-between">
                <div className="flex">
                    <img
                        // placeholder image
                        src="https://images.pexels.com/photos/7828324/pexels-photo-7828324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="mx-4 rounded-full h-24 w-24"
                        alt="Avatar"
                    ></img>
                    <div>
                        <a className="username">
                            {localStorage.getItem("username") ||
                                "Usuário não encontrado"}
                        </a>
                        <p>
                            <strong>Interesses:</strong> Lista de Interesses
                        </p>
                        {
                            // deverá puxar um array e exibir as principais badges do usuário
                        }
                        <div className="md:block lg:flex">
                            <div className="badge">
                                <FontAwesomeIcon
                                    className="mx-1"
                                    icon={icon({
                                        name: "certificate",
                                        style: "solid",
                                    })}
                                />
                                <a>Bagde de conquista do usuário</a>
                            </div>
                            <div className="badge">
                                <FontAwesomeIcon
                                    className="mx-1"
                                    icon={icon({
                                        name: "certificate",
                                        style: "solid",
                                    })}
                                />
                                <a>Bagde de conquista do usuário 2</a>
                            </div>
                        </div>
                    </div>
                </div>
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
                        onClick={() => isShowUnderConstructionToast(true)}
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
            <AlterarEmail
                currentEmail={user != null ? user.email : null}
                open={showChangeEmail}
                setOpen={isShowChangeEmail}
            />
            <AlterarSenha
                open={showChangePassword}
                setOpen={isShowChangePassword}
            />
            <Logout open={showLogout} setOpen={isShowLogout} />
            <Toast
                open={showUnderConstructionToast}
                setOpen={isShowUnderConstructionToast}
                iconName="wrench"
                message="Desculpe! Esta opção ainda não está disponível"
            />
        </>
    );
}
