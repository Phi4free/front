import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";

export default function SideMenu(props) {
    const { title, keepOnMenu, options } = props;
    // options tem um array de objetos
    // cada objeto terá: id, icon, nome, descrição, botão de ação
    return (
        <>
            <aside className="w-72 bg-[#1c212c] min-h-full h-screen flex flex-col items-center pt-5 pb-2 space-y-7">
                <div className="w-full pr-3 flex flex-col gap-y-1 text-gray-500 fill-gray-500 text-sm">
                    <div className="pl-4 text-white">
                        <h1>{title}</h1>
                        <br/>
                    </div>
                    {Object.keys(options).map((id) => (
                        <div className="w-full flex items-center gap-x-1.5 group select-none">
                            <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-btnprimary transition-all duration-300"></div>
                            </div>
                            <button
                                className="group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm"
                                onClick={() => options[id].acao()}
                            >
                                {options[id].label}
                            </button>
                        </div>
                    ))}
                </div>
                <div>
                    <button
                        className="inline-flex w-full justify-center rounded-md py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto bg-btnprimary text-btnhover px-20"
                        onClick={() => keepOnMenu(false)}
                    >
                        FECHAR
                    </button>
                </div>
            </aside>
        </>
    );
}
