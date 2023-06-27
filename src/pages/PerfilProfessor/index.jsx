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
import { TopBarUser } from "./Items/topBarUser";
import { Feed } from "./Items/feed";
import Footer from "../../components/LandingPage/Footer";


export function PerfilProfessor() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [loading, isLoading] = useState(false); 
    const [showAdvancedMenu, isShowAdvancedMenu] = useState(false);
    const [showChangeEmail, isShowChangeEmail] = useState(false);
    const [showChangePassword, isShowChangePassword] = useState(false);
    const [showLogout, isShowLogout] = useState(false);
    const [showUnderConstructionToast, isShowUnderConstructionToast] =
        useState(false);
    const [hideTopBar, isHideTopBar] = useState(false);
    const [user, setUser] = useState(null);

    const opcoesAvancadas = {
        email: {
            label: t('altEmail'),
            acao: () => {
                isShowChangeEmail(true);
            },
        },
        senha: {
            label: t('altPass'),
            acao: () => {
                isShowChangePassword(true);
            },
        },
        segConta: {
            label: t('accSecurity'),
            acao: () => {
                isShowUnderConstructionToast(true);
            },
        },
        logout: {
            label: t('logout'),
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
                title={t('advancedOptions')}
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
                message={t('unavailableOption')}
                background="warningyellow"
                accent="warningaccent"
                color="white"
            />
        </div>
    );
}