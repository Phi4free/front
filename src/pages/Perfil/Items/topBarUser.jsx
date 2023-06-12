import { useState } from "react";
import { close, menu } from "../../../assets/LandingPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Toast from "../../../components/Toast";

export function TopBarUser(props) {
    const {isShowUnderConstructionToast, isShowAdvancedMenu, showAdvancedMenu} = props;
    const [toggle, setToggle] = useState(false);
    const [showBadgeToast, isShowBadgeToast] = useState(false);

    return (
        <>
            <div className="sm:hidden flex flex-1 justify-end items-center px-2 py-2">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
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
                        <li
                            className={`font-normal cursor-pointer text-[16px] mb-4 text-dimWhite`}
                            onClick={() => isShowUnderConstructionToast(true)}
                        >
                            PHISTORE
                        </li>
                        <li
                            className={`font-normal cursor-pointer text-[16px] mb-4 text-dimWhite`}
                            onClick={() => isShowUnderConstructionToast(true)}
                        >
                            RANKING
                        </li>
                    </ul>
                </div>
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
                            <strong>Interesses: </strong>
                            {
                                // deverá puxar um array e exibir as principais badges do usuário
                                <>Lista de interesses</>
                            }
                        </p>
                        {
                            // deverá puxar um array e exibir as 3 principais conquistas do usuário
                            <div
                                className="md:block lg:flex"
                                onClick={() => isShowBadgeToast(true)}
                            >
                                <div className="badge">
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
            <Toast
                open={showBadgeToast}
                setOpen={isShowBadgeToast}
                iconName="certificate"
                message="Este usuário é um dos primeiros a ter uma conta na Phi4Free!"
            />
        </>
    );
}
