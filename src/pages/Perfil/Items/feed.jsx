import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useTranslation } from "react-i18next";
import { fetchArticlesList } from "../../Home/articleConstructor";
import { getStudyList } from "./studyListConstructor";

export function Feed(props) {
    const { isStudent, listaLeitura } = props;
    const [selectedFeed, setSelectedFeed] = useState("0");
    const [articlesList, setArticlesList] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        fetchArticlesList().then((data) => {
            switch (data.status) {
                case 200:
                    setArticlesList(data.body.data);
                    break;
                case 401:
                    navigate("/session-expired");
                    break;
                default:
                    console.log(data.status);
                    break;
            }
        });
    }, []);

    useEffect(() => {
        renderItems();
    }, [selectedFeed]);

    const feeds = {
        0: isStudent ? t("studyList") : t("published"),
        1: isStudent ? t("archieve") : null,
        2: isStudent ? t("certificates") : t("drafts"),
    };

    // deverá ser substituido pela cor referência da badge do usuário - pega dinamicamente do BD
    const colors = ["#ffb90b", "#d1abad", "#8783d1", "#d2f898", "#cf5c36"];
    function getRandomColor() {
        const random = Math.floor(Math.random() * colors.length);
        return random;
    }

    // Deve ser substituido por chamada dinamica dos itens do BD
    function renderItems() {
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
                return isStudent ? (
                    getStudyList(t, articlesList, listaLeitura)
                ) : (
                    <div className={"mx-4 py-2"}>
                        <div>
                            {
                                // Deverá ser substituido pela lista real de artigos do professor, do BD
                            }
                            {/* <ArticlesRow
                                title={"Disciplina 1"}
                                items={[
                                    mockedArticle
                                ]}
                            /> */}
                        </div>
                        <div className="text-xl text-white/50 flex text-center justify-center items-center">
                            {t("feedEmpty")}
                        </div>
                    </div>
                );
            case "1":
                return (
                    isStudent ?
                    <div className={"mx-4 py-2"}>
                        {Object.keys(mockedBadges).map((nome, index) => {
                            let color = colors[getRandomColor()];
                            return (
                                <div
                                    key={"key-div-" + nome + "-" + index}
                                    className="flex sm:items-left sm:justify-start items-center justify-center rounded-lg mx-4 my-2 px-1 py-0 sm:px-4 sm:py-4 h-32 sm:h-24 bg-gradient-to-r from-black hover:from-white/25 to-transparent cursor-pointer"
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
                                                stroke={color}
                                                strokeMiterlimit="10"
                                                strokeWidth="2"
                                            ></circle>
                                            <path
                                                fill="none"
                                                stroke={color}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M32,37A11.5,11.5,0,0,1,20.5,25.5"
                                            ></path>
                                            <polyline
                                                fill="none"
                                                stroke={color}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                points="20 38 20 57 32 50 44 57 44 38"
                                            ></polyline>
                                        </svg>

                                        <div className="block items-center text-center sm:text-left">
                                            <div className="text-btnprimary mx-2">
                                                <a className="text-xl py-4 sm:py-0">
                                                    {nome}
                                                </a>
                                            </div>
                                            <p className="mx-2">
                                                {mockedBadges[nome]}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    : null
                );

            case "2": //MOCKED
                let color = colors[getRandomColor()];
                return isStudent ? (
                    <div className={"mx-4 py-2 sm:h-96 h-80"}>
                        <div className="flex sm:items-left sm:justify-start items-center justify-center rounded-lg mx-4 my-2 px-1 py-0 sm:px-4 sm:py-4 h-32 sm:h-24 bg-gradient-to-r from-black hover:from-white/25 to-transparent cursor-pointer">
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
                                        stroke={color}
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                    ></circle>
                                    <path
                                        fill="none"
                                        stroke={color}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M32,37A11.5,11.5,0,0,1,20.5,25.5"
                                    ></path>
                                    <polyline
                                        fill="none"
                                        stroke={color}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        points="20 38 20 57 32 50 44 57 44 38"
                                    ></polyline>
                                </svg>

                                <div className="block items-center text-center sm:text-left">
                                    <div className="text-btnprimary mx-2">
                                        <a className="text-xl py-4 sm:py-0">
                                            Criação de textos mocados com
                                            chatGPT
                                        </a>
                                    </div>
                                    <p className="mx-2">
                                        Prof. OpenAI, ChatGPT
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null // deverá ser substituido pela lista de rascunhos do professor
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
            <div className={"flex justify-evenly py-2 mt-2 "}>
                {Object.keys(feeds).map((id, index) => (
                    <a
                        key={id + "feedA - " + index}
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
            {renderItems()}
        </>
    );
}
