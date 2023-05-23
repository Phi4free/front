import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import "./style.css";

export default function SideMenu(props) {
    const { id, keepOnMenu, options } = props;
    // options tem um array de objetos
    // cada objeto terá: id, icon, nome, descrição, botão de ação
    return (
        <>
            <aside className="w-72 bg-[#1c212c] min-h-full h-screen flex flex-col items-center pt-5 pb-2 space-y-7">
                <div className="w-full pr-3 flex flex-col gap-y-1 text-gray-500 fill-gray-500 text-sm">
                    <div className="font-QuicksandMedium pl-4 text-gray-400/60 text-xs text-[11px] uppercase">
                        Menu
                    </div>

                    <div className="w-full flex items-center gap-x-1.5 group select-none">
                        <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-0 bg-red-600 transition-all duration-300"></div>
                        </div>
                        <div
                            className="bg-white/10 text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm"
                            href="#"
                        >
                            <svg
                                className="h-5 w-5 !fill-red-500 group-hover:fill-red-600 dark:fill-gray-600  transition-colors duration-200"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            ></svg>

                            <span className="font-QuicksandMedium">Home</span>
                        </div>
                    </div>

                    <div className="w-full flex items-center gap-x-1.5 group select-none">
                        <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-red-600 transition-all duration-300"></div>
                        </div>
                        <div
                            className="group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm"
                            href="#"
                        >
                            <svg
                                className="h-5 w-5 group-hover:fill-red-600 dark:fill-gray-600 transition-colors duration-200"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <g></g>
                            </svg>
                            <span className="font-QuicksandMedium">
                                Discovery
                            </span>
                        </div>
                    </div>

                    <div className="w-full flex items-center gap-x-1.5 group select-none">
                        <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-red-600 transition-all duration-300"></div>
                        </div>
                        <div
                            className="group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm"
                            href="#"
                        >
                            <svg
                                className="h-5 w-5 group-hover:fill-red-600 dark:fill-gray-600  transition-colors duration-200"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            ></svg>

                            <span className="font-QuicksandMedium">
                                Friends
                            </span>
                        </div>
                    </div>

                    <div className="w-full flex items-center gap-x-1.5 group select-none">
                        <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-red-600 transition-all duration-300"></div>
                        </div>
                        <div
                            className="group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm"
                            href="#"
                        >
                            <svg
                                className="h-5 w-5 group-hover:fill-red-600 dark:fill-gray-600  transition-colors duration-200"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            ></svg>

                            <span className="font-QuicksandMedium">
                                Coming soon
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full pr-3 flex flex-col gap-y-1 text-gray-500 fill-gray-500 text-sm">
                    <div className="font-QuicksandMedium pl-4 text-gray-400/60 text-xs text-[11px] uppercase">
                        Profile
                    </div>

                    <div className="w-full flex items-center gap-x-1.5 group select-none">
                        <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-red-600 transition-all duration-300"></div>
                        </div>
                        <div
                            className="group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm"
                            href="#"
                        >
                            <svg
                                className="h-5 w-5 group-hover:fill-red-600 dark:fill-gray-600  transition-colors duration-200"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            ></svg>
                            <span className="font-QuicksandMedium">
                                edit profile
                            </span>
                        </div>
                    </div>

                    <div className="w-full flex items-center gap-x-1.5 group select-none">
                        <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-red-600 transition-all duration-300"></div>
                        </div>
                        <div
                            className="group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm"
                            href="#"
                        >
                            <svg
                                className="h-5 w-5 group-hover:fill-red-600 dark:fill-gray-600  transition-colors duration-200"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            ></svg>
                            <span className="font-QuicksandMedium">
                                Settings
                            </span>
                        </div>
                    </div>

                    <div className="w-full flex items-center gap-x-1.5 group select-none">
                        <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-red-600 transition-all duration-300"></div>
                        </div>
                        <div
                            className="group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm"
                            href="#"
                        >
                            <svg
                                className="h-5 w-5 group-hover:fill-red-600 dark:fill-gray-600  transition-colors duration-200"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            ></svg>

                            <span className="font-QuicksandMedium">
                                log out
                            </span>
                        </div>
                    </div>
                    <div>
                        <br />
                        <br />
                        <button
                            className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto bg-btnprimary"
                            onClick={() => keepOnMenu(false)}
                        >
                            FECHAR
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}
