import { Container, Logo, User, LogoImg, UserImg } from "./styles";
import { close, menu, bellsolid } from "../../../assets/LandingPage";
import { useState } from "react";
import logo from "../../../assets/logo.png";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { isStudent, advancedMenu, isAdvancedMenu, underConstruction } =
        props;
    const [toggle, setToggle] = useState(false);
    const background = {
        transparent: "transparent",
        black: "#1A1A1A",
    };
    return (
        <Container className="mb-8" theme={background.black}>
            <Logo>
                <a href="/#/home">
                    <LogoImg src={logo} alt="Phi4free" />
                </a>
            </Logo>
            <div className="flex flex-1 justify-end items-center px-4">
                {
                    // AJUSTAR A COR DESSE BELL
                }
                <img
                    src={bellsolid}
                    alt="notification-bell"
                    className="w-[36px] h-[36px] object-contain cursor-pointer mx-6"
                    onClick={() => console.log("Deve abrir aba de notificações")}
                />
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain cursor-pointer"
                    onClick={() => setToggle(!toggle)}
                />
            </div>
            <div className="py-2">
                <div
                    className={`${
                        !toggle ? "hidden" : "flex"
                    } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}
                >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        {!toggle ? null : (
                            <div>
                                <li
                                    className={`font-normal cursor-pointer text-[16px] mb-4 text-dimWhite`}
                                    onClick={() => underConstruction(true)}
                                >
                                    {t("store")}
                                </li>
                                {isStudent ? (
                                    <li
                                        className={`font-normal cursor-pointer text-[16px] mb-4 text-dimWhite`}
                                        onClick={() => underConstruction(true)}
                                    >
                                        {t("ranking")}
                                    </li>
                                ) : (
                                    <li
                                        className={`font-normal cursor-pointer text-[16px] mb-4 text-dimWhite`}
                                        onClick={() =>
                                            navigate("/cadastro-artigo")
                                        }
                                    >
                                        {t("writeArticle")}
                                    </li>
                                )}
                            </div>
                        )}
                        <li
                            className={`font-normal cursor-pointer text-[16px] mb-4 text-dimWhite`}
                            onClick={() => underConstruction(true)}
                        >
                            {t("editProfile")}
                        </li>
                        <li
                            className={`font-normal cursor-pointer text-[16px] mb-4 text-dimWhite`}
                            onClick={() => {
                                isAdvancedMenu(!advancedMenu);
                                setToggle(false);
                            }}
                        >
                            {t("advancedOptions")}
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    );
}
