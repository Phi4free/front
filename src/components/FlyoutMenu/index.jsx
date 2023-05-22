import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import "./style.css";

export default function FlyoutMenu(props) {
    const { id, keepOnMenu } = props;
    return (
        <>
            <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                        <h1>OPÇÕES AVANÇADAS</h1>
                        <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <svg
                                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <a
                                    href="#"
                                    className="font-semibold text-gray-900"
                                >
                                    Analytics
                                    <span className="absolute inset-0"></span>
                                </a>
                                <p className="mt-1 text-gray-600">
                                    Get a better understanding of your traffic
                                </p>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto bg-btnprimary"
                            onClick={() => keepOnMenu(false)}
                        >
                            SAIR
                        </button>
                        <br />
                    </div>
                </div>
            </div>
        </>
    );
}
