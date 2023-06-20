import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useTranslation } from "react-i18next";
import Toast from "../../../components/Toast";

export function Feed(props) {
    const { hideBar } = props;
    const [selectedFeed, setSelectedFeed] = useState("0");
    const { t } = useTranslation();

    useEffect(() => {
        renderMockedItems();
    }, [selectedFeed]);

    const feeds = {
        0: t("archieve"),
        1: t("studyList"),
        2: t("certificates"),
    };

    // Deve ser substituido por chamada dinamica dos itens do BD
    function renderMockedItems() {
        const mockedBadges = {
            "Philantropia I": "Faça uma doação para apoiar a plataforma",
            "Para ler depois": "Salve um artigo na sua lista de leitura",
            "Que comecem os estudos": "Complete 1 dia de estudos",
            "Primeiros Passos": "Leia um artigo",
            "Pioneiros da Phi4Free":
                "Seja um dos 100 primeiros usuários da plataforma",
        };

        switch (selectedFeed) {
            case "0":
                return (
                    <div
                        className={
                            "mx-4 py-2 overflow-y-auto " +
                            (hideBar ? "sm:h-3/4 h-auto" : "sm:h-96 h-80")
                        }
                    >
                        {Object.keys(mockedBadges).map((nome) => (
                            <div
                                keys={"key-div-" + nome}
                                className="rounded-lg mx-4 my-2 px-1 py-0 sm:px-4 sm:py-4 h-32 sm:h-24 bg-gradient-to-r from-black hover:from-white/25 to-transparent cursor-pointer"
                            >
                                <div className="sm:flex block items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-name="Layer 1"
                                        className="hidden sm:block"
                                        width={"50px"}
                                        height={"60px"}
                                        id="achievement"
                                    >
                                        <circle
                                            cx="32"
                                            cy="25.5"
                                            r="17"
                                            fill="none"
                                            stroke="#ffb90b"
                                            strokeMiterLimit="10"
                                            strokeWidth="2"
                                        ></circle>
                                        <path
                                            fill="none"
                                            stroke="#ffb90b"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M32,37A11.5,11.5,0,0,1,20.5,25.5"
                                        ></path>
                                        <polyline
                                            fill="none"
                                            stroke="#ffb90b"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            points="20 38 20 57 32 50 44 57 44 38"
                                        ></polyline>
                                    </svg>

                                    <div className="block items-center text-center sm:text-left">
                                        <div
                                            keys={"key-div2-" + nome}
                                            className="text-btnprimary mx-2"
                                        >
                                            <a
                                                className="text-xl py-4 sm:py-0"
                                                key={nome}
                                            >
                                                {nome}
                                            </a>
                                        </div>
                                        <p
                                            className="mx-2"
                                            key={"paragrafo-" + nome}
                                        >
                                            {mockedBadges[nome]}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case "1":
                break;
            case "2":
                break;
            default:
                return (
                    <div className="flex justify-center px-4 py-12">
                        <h1>{t("feedError")}</h1>
                        <div>
                            <FontAwesomeIcon
                                className="mx-1"
                                icon={icon({
                                    name: "face-dizzy",
                                    style: "solid",
                                })}
                            />
                        </div>
                    </div>
                );
        }
    }

    return (
        <>
            <div
                className={
                    "flex justify-evenly py-4 mt-2 " +
                    (hideBar ? "" : "flex-[10]")
                }
            >
                {Object.keys(feeds).map((id) => (
                    <a
                        key={id + "feedA"}
                        className={`${
                            selectedFeed == id
                                ? "hover:text-white underline decoration-2"
                                : "opacity-50 no-underline "
                        } cursor-pointer hover:text-secondary hover:opacity-100 underline-offset-8 decoration-btnsecondary`}
                        onClick={() => {
                            setSelectedFeed(id);
                        }}
                    >
                        {" "}
                        {feeds[id]}{" "}
                    </a>
                ))}
            </div>
            {renderMockedItems()}
        </>
    );
}
