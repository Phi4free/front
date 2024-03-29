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
import { fetchUserData } from "../../services/utils";
import { TopBarUser } from "./Items/topBarUser";
import { Feed } from "./Items/feed";
import Footer from "../../components/LandingPage/Footer";
import { Loading } from "../ReadArticle/styles";
import { LoaderContainer } from "./style";

// MEU PERFIL - Exibe o perfil do usuário logado
export function Perfil() {
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

    useEffect(() => {
        // Previne que o perfil abra no bottom ou no meio da tela
        window.scrollTo({ top: 0, left: 0})
    }, [])

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

    function isStudent() {
        return user?.role == "Student";
    }

    const opcoesAvancadas = {
        email: {
            label: t("altEmail"),
            acao: () => {
                isShowChangeEmail(true);
            },
        },
        senha: {
            label: t("altPass"),
            acao: () => {
                isShowChangePassword(true);
            },
        },
        segConta: {
            label: t("accSecurity"),
            acao: () => {
                isShowUnderConstructionToast(true);
            },
        },
        logout: {
            label: t("logout"),
            acao: () => {
                isShowLogout(true);
            },
        },
    };

    return (
        <div className="flex flex-col">
            {user == null ? (
                <LoaderContainer>
                    <Loading />
                    <h1>{t('loadingProfile')}</h1>
                </LoaderContainer>
                
            ) : (
                <>
                    <TopBarUser
                        isStudent={isStudent()}
                        isShowUnderConstructionToast={
                            isShowUnderConstructionToast
                        }
                        isShowAdvancedMenu={isShowAdvancedMenu}
                        showAdvancedMenu={showAdvancedMenu}
                    />
                    <Feed
                        id={user?._id}
                        listaLeitura={user?.listaLeitura}
                        isStudent={isStudent()}
                    />
                    <div className="left-0 bottom-0 px-8 py-4">
                        <Footer />
                    </div>
                    <SideMenu
                        title={t("advancedOptions")}
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
                        message={t("unavailableOption")}
                        background="warningyellow"
                        accent="warningaccent"
                        color="white"
                    />
                </>
            )}
        </div>
    );
}
