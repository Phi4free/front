import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useEffect, useState } from "react";

export default function Toast(props) {
    const { open, setOpen, message, iconName, background, accent, color } = props;
    const _background = background ? background.toLowerCase() : "gray-800";
    const _accent = accent ? accent.toLowerCase() : "blue-800";
    const _color = color ? color.toLowerCase() : "gray-400";
    const { t } = useTranslation();

    const icons = {
        "circle-exclamation": solid("circle-exclamation"),
        certificate: solid("certificate"),
        wrench: solid("wrench"),
    };

    return (
        <div>
            {/* Background + text*/}
            <div
                id="toast-default"
                className={
                    (open ? "flex" : "hidden") +
                    ` absolute right-0 bottom-0 mx-8 my-8 items-center w-full max-w-xs p-4 rounded-lg shadow text-${color} bg-${_background}`
                }
                role="alert"
            >
                {/* Toast icon */}
                <div
                    className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-${_accent} text-blue-200`}
                >
                    {iconName == null ? (
                        <FontAwesomeIcon icon={icons["circle-exclamation"]} />
                    ) : (
                        <FontAwesomeIcon icon={icons[iconName]} />
                    )}
                    <span className="sr-only">Fire icon</span>
                </div>
                <div className="ml-3 text-sm font-normal">{message}</div>
                {/* Close button */}
                <button
                    type="button"
                    className={`ml-auto -mx-1.5 -my-1.5 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex h-8 w-8 text-gray-500 hover:text-white bg-${_background} hover:bg-${_accent}/50`}
                    aria-label="Close"
                    onClick={() => setOpen(false)}
                >
                    <span className="sr-only">Close</span>
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}
