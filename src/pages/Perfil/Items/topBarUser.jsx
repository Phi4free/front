import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Toast from "../../../components/Toast";
import { useTranslation } from "react-i18next";
import { defaultIcon } from "../../../assets/LandingPage";
import Header from "../Header";

export function TopBarUser(props) {
    const {
        isShowUnderConstructionToast,
        isShowAdvancedMenu,
        showAdvancedMenu,
        hideBar,
        isHideBar,
    } = props;
    const { t } = useTranslation();
    const [showBadgeToast, isShowBadgeToast] = useState(false);

    return (
        <>
            <Header
                underConstruction={isShowUnderConstructionToast}
                isAdvancedMenu={isShowAdvancedMenu}
                advancedMenu={showAdvancedMenu}
            />
            {!hideBar ? (
                <>
                    <div>
                        <div className="mt-16 block sm:flex">
                            <div className="flex justify-center">
                                <img
                                    // placeholder image
                                    src={defaultIcon}
                                    className={`${""} w-24 mx-8 rounded-full h-24 border-2 border-btnprimary`}
                                    alt="Avatar"
                                ></img>
                            </div>
                            <div className="text-center sm:text-left">
                                <a className="username">
                                    {localStorage.getItem("username") ||
                                        t("user404")}
                                </a>
                                <div className="px-4 sm:px-0">
                                    <strong>{t("interests")}: </strong>
                                    {
                                        // deverá puxar um array e exibir os interesses do usuário dinamicamente
                                        <a className="opacity-75">
                                            {t("Financial")},{" "}
                                            {t("Philosophical")},{" "}
                                            {t("Physical")}, {t("Functional")}
                                        </a>
                                    }
                                </div>

                                {
                                    // deverá puxar um array do BD e exibir as conquistas do usuário dinamicamente
                                    <div
                                        className="flex flex-wrap justify-center sm:justify-start mx-4 my-2 sm:mx-0"
                                        onClick={() => isShowBadgeToast(true)}
                                    >
                                        <div className="w-fit badge cursor-pointer">
                                            <FontAwesomeIcon
                                                className="mx-1"
                                                icon={icon({
                                                    name: "certificate",
                                                    style: "solid",
                                                })}
                                            />
                                            <a>Pioneiros da Phi4Free</a>
                                        </div>
                                        <div className="w-fit badge cursor-pointer">
                                            <FontAwesomeIcon
                                                className="mx-1"
                                                icon={icon({
                                                    name: "certificate",
                                                    style: "solid",
                                                })}
                                            />
                                            <a>Philantropia I</a>
                                        </div>
                                        <div className="w-fit badge cursor-pointer">
                                            <FontAwesomeIcon
                                                className="mx-1"
                                                icon={icon({
                                                    name: "certificate",
                                                    style: "solid",
                                                })}
                                            />
                                            <a>Que comecem os estudos</a>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </>
            ) : null}

            <div className="sm:hidden flex justify-center py-2">
                <button
                    onClick={() => {
                        isHideBar(!hideBar);
                    }}
                >
                    {hideBar ? (
                        <div className="mt-14 px-4 py-2">
                            <FontAwesomeIcon
                                className="mx-1"
                                icon={icon({
                                    name: "arrow-down",
                                    style: "solid",
                                })}
                            />
                            <a>{t("expand")}</a>
                        </div>
                    ) : (
                        <>
                            <FontAwesomeIcon
                                className="mx-1"
                                icon={icon({
                                    name: "arrow-up",
                                    style: "solid",
                                })}
                            />
                            <a>{t("recoil")}</a>
                        </>
                    )}
                </button>
            </div>
            {/**
             * This Toast is mocked and must shoutout the badge dinamically
             */}
            <Toast
                open={showBadgeToast}
                setOpen={isShowBadgeToast}
                iconName="certificate"
                message="Deve exibir detalhes da badge do usuário"
            />
        </>
    );
}
