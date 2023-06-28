import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Toast from "../../../components/Toast";
import { useTranslation } from "react-i18next";
import { defaultIcon } from "../../../assets/LandingPage";
import Header from "../Header";

export function TopBarUser(props) {
    const {
        isStudent,
        isShowUnderConstructionToast,
        isShowAdvancedMenu,
        showAdvancedMenu,
    } = props;
    const { t } = useTranslation();
    const [showBadgeToast, isShowBadgeToast] = useState(false);

    return (
        <>
            <Header
                isStudent={isStudent}
                underConstruction={isShowUnderConstructionToast}
                isAdvancedMenu={isShowAdvancedMenu}
                advancedMenu={showAdvancedMenu}
            />
            <>
                <div>
                    <div className="mt-20 block sm:flex">
                        <div className="flex justify-center">
                            <img
                                // placeholder image
                                src={defaultIcon}
                                className={`${""} w-24 mx-8 rounded-full h-24 border-2 border-btnprimary`}
                                alt="Avatar"
                            ></img>
                        </div>
                        <div className="flex flex-col text-center sm:text-left">
                            <div className="flex items-center flex-col sm:flex-row">
                                <a className="username">
                                    {localStorage.getItem("username") ||
                                        t("user404")}
                                </a>
                                {isStudent ? null : (
                                    <strong className="mx-4 px-2 rounded-full bg-black w-fit">
                                        <a className="text-primary">
                                            <FontAwesomeIcon
                                                className="mx-1"
                                                icon={icon({
                                                    name: "graduation-cap",
                                                    style: "solid",
                                                })}
                                            />
                                        </a>
                                        {t("teacher")}
                                    </strong>
                                )}
                            </div>
                            <div className="px-4 sm:px-0">
                                {
                                    // deverá puxar um array e exibir os interesses do usuário dinamicamente
                                    <a className="opacity-75">
                                        {t("Financial")}, {t("Philosophical")},{" "}
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
