import { useState } from "react";
import { close, menu } from "../../../assets/LandingPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Toast from "../../../components/Toast";
import { useTranslation } from "react-i18next";
import {defaultIcon} from "../../../assets/LandingPage";

export function TopBarUser(props) {
    const {
        isShowUnderConstructionToast,
        isShowAdvancedMenu,
        showAdvancedMenu,
    } = props;
    const { t } = useTranslation();
    const [toggle, setToggle] = useState(false);
    const [showBadgeToast, isShowBadgeToast] = useState(false);

    return (
        <>
            <div className="flex flex-1 justify-end items-center px-4 pt-4">
                <div className={`${"sm:flex hidden"} mx-4`}>
                    <button
                        type="button"
                        className="border-1 border-solid border-primary hover:border-transparent px-4 py-1 text-sm text-primary"
                        onClick={() => isShowUnderConstructionToast(true)}
                    >
                        RANKING
                    </button>
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md text-btnhover px-5 py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto bg-btnprimary"
                        onClick={() => isShowUnderConstructionToast(true)}
                    >
                        PHISTORE
                    </button>
                </div>
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
                    } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        {!toggle ? null : (
                            <div className="sm:hidden">
                                <li
                                    className={`font-normal cursor-pointer text-[16px] mb-4 text-dimWhite`}
                                    onClick={() =>
                                        isShowUnderConstructionToast(true)
                                    }
                                >
                                    PHISTORE
                                </li>
                                <li
                                    className={`font-normal cursor-pointer text-[16px] mb-4 text-dimWhite`}
                                    onClick={() =>
                                        isShowUnderConstructionToast(true)
                                    }
                                >
                                    RANKING
                                </li>
                            </div>
                        )}
                        <li
                            className={`font-normal cursor-pointer text-[16px] mb-4 text-dimWhite`}
                            onClick={() => isShowUnderConstructionToast(true)}
                        >
                            EDITAR PERFIL
                        </li>
                        <li
                            className={`font-normal cursor-pointer text-[16px] mb-4 text-dimWhite`}
                            onClick={() => {
                                isShowAdvancedMenu(!showAdvancedMenu);
                                setToggle(false);
                            }}
                        >
                            OPÇÕES AVANÇADAS
                        </li>
                    </ul>
                </div>
            </div>
            <div className="md:block lg:flex">
                <div className="flex">
                    <img
                        // placeholder image
                        src={defaultIcon}
                        className={`${""} w-24 mx-4 rounded-full h-24 border-2 border-btnprimary`}
                        alt="Avatar"
                    ></img>
                    <div>
                        <a className="username">
                            {localStorage.getItem("username") ||
                                "Usuário não encontrado"}
                        </a>
                            <p>
                                <strong>Interesses: </strong>
                                {
                                    // deverá puxar um array e exibir as principais badges do usuário dinamicamente
                                    <a className="opacity-75">
                                        {t("Financial")}, {t("Philosophical")},
                                        {t("Physical")}, {t("Functional")}
                                    </a>
                                }
                            </p>

                        {
                            // deverá puxar um array e exibir as 3 principais conquistas do usuário
                            <div
                                className="md:block lg:flex"
                                onClick={() => isShowBadgeToast(true)}
                            >
                                <div className="badge cursor-pointer">
                                    <FontAwesomeIcon
                                        className="mx-1"
                                        icon={icon({
                                            name: "certificate",
                                            style: "solid",
                                        })}
                                    />
                                    <a>Pioneiros da Phi4Free</a>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <Toast
                open={showBadgeToast}
                setOpen={isShowBadgeToast}
                iconName="certificate"
                message="Este usuário é um dos primeiros a ter uma conta na Phi4Free!"
            />
        </>
    );
}
