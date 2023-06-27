import { useState } from "react";
import { close, menu } from "../../../assets/LandingPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Toast from "../../../components/Toast";
import { useTranslation } from "react-i18next";
import { defaultIcon } from "../../../assets/LandingPage";
import { useNavigate } from "react-router-dom";

export function TopBarUser(props) {
    const {
        isShowUnderConstructionToast,
        isShowAdvancedMenu,
        showAdvancedMenu,
        hideBar,
        isHideBar,
    } = props;
    const { t } = useTranslation();
    const [toggle, setToggle] = useState(false);
    const [showBadgeToast, isShowBadgeToast] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            {!hideBar ? (
                <>
                    <div className="flex flex-1 justify-end items-center px-4 pt-4">
                        <div className={`${"sm:flex hidden"} mx-4 z-1`}>
                        <button
  type="button"
  className="border-1 border-solid border-primary hover:border-transparent px-4 py-1 text-sm text-primary"
  onClick={() => navigate("/cadastro-artigo")}
>
  {t("Escrever Artigo")}
</button>
                            <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-md text-btnhover px-5 py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto bg-btnprimary"
                                onClick={() =>
                                    isShowUnderConstructionToast(true)
                                }
                            >
                                {t("store")}
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
                            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}
                        >
                            <ul className="list-none flex justify-end items-start flex-1 flex-col">
                                {!toggle ? null : (
                                    <div className="sm:hidden">
                                        <li
                                            className={`font-normal cursor-pointer text-[16px] mb-4 text-dimWhite`}
                                            onClick={() =>
                                                isShowUnderConstructionToast(
                                                    true
                                                )
                                            }
                                        >
                                            {t("store")}
                                        </li>
                                        <li
                                            className={`font-normal cursor-pointer text-[16px] mb-4 text-dimWhite`}
                                            onClick={() =>
                                                isShowUnderConstructionToast(
                                                    true
                                                )
                                            }
                                        >
                                            {t("ranking")}
                                        </li>
                                    </div>
                                )}
                                <li
                                    className={`font-normal cursor-pointer text-[16px] mb-4 text-dimWhite`}
                                    onClick={() =>
                                        isShowUnderConstructionToast(true)
                                    }
                                >
                                    {t("editProfile")}
                                </li>
                                <li
                                    className={`font-normal cursor-pointer text-[16px] mb-4 text-dimWhite`}
                                    onClick={() => {
                                        isShowAdvancedMenu(!showAdvancedMenu);
                                        setToggle(false);
                                    }}
                                >
                                    {t("advancedOptions")}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="block sm:flex">
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
                                            <a>Que comecem as publicações</a>
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
                        <>
                            <FontAwesomeIcon
                                className="mx-1"
                                icon={icon({
                                    name: "arrow-down",
                                    style: "solid",
                                })}
                            />
                            <a>{t('expand')}</a>
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon
                                className="mx-1"
                                icon={icon({
                                    name: "arrow-up",
                                    style: "solid",
                                })}
                            />
                            <a>{t('recoil')}</a>
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
