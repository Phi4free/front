import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SideMenu from "../../components/SideMenu";
import "./styles.css";
import { AlterarEmail } from "./SideMenuItems/alterarEmail";
import { AlterarSenha } from "./SideMenuItems/alterarSenha";
import Toast from "../../components/Toast";
import { Logout } from "./SideMenuItems/fazerLogout";
import { fetchUserData } from "./userConstructor";
import { TopBarUser } from "./Items/topBarUser";
import { Feed } from "./Items/feed";
import Footer from "../../components/LandingPage/Footer";

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
    const [hideTopBar, isHideTopBar] = useState(false);
    const [user, setUser] = useState(null);

    /**
     * Faz o fetch das informações do perfil do usuário 1x quando inicializado;
     * Após isso, vai refazer o fetch sempre que ele abrir e fechar os menus de configuração, para garantir
     * que caso alguma informação foi alterada, ela será atualizada imediatamente após concluir as edições
     */

    useEffect(() => {
        fetchUserData().then((data) => {
            switch (data.status) {
                case 200:
                    setUser(data.body.data);
                    break;
                case 401:
                    navigate("/session-expired");
                    break;
                default:
                    console.log(data.status);
                    break;
            }
        });
    }, [
        showAdvancedMenu,
        !showAdvancedMenu,
        !showChangeEmail,
        !showChangeEmail,
    ]);

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
        <div className="flex flex-col bg-gradient-to-r from-transparent to-black/75  h-full flex-grow">
            <TopBarUser
                isShowUnderConstructionToast={isShowUnderConstructionToast}
                isShowAdvancedMenu={isShowAdvancedMenu}
                showAdvancedMenu={showAdvancedMenu}
                hideBar={hideTopBar}
                isHideBar={isHideTopBar}
            />
            <Feed hideBar={hideTopBar}/>
            {/* <Footer/> */}
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
                currentEmail={user != null ? user.email : null}
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
        </div>
    );
}
