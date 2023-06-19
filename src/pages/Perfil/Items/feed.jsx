import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Toast from "../../../components/Toast";

export function Feed(props) {
    const { hideBar } = props;
    const [selectedFeed, setSelectedFeed] = useState("0");

    useEffect(() => {
        renderMockedItems();
    }, [selectedFeed]);

    const feeds = {
        0: "Conquistas",
        1: "Lista de estudo",
        2: "Certificados",
    };

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
                                className="rounded mx-4 my-2 px-4 py-4 bg-btnhover/75 h-32 border-4 border-transparent border-s-btnsecondary"
                            >
                                <div
                                    keys={"key-div2-" + nome}
                                    className="text-btnprimary"
                                >
                                    <FontAwesomeIcon
                                        className="mx-2"
                                        icon={icon({
                                            name: "certificate",
                                            style: "solid",
                                        })}
                                    />
                                    <a className="text-xl" key={nome}>
                                        {nome}
                                    </a>
                                </div>
                                <p className="mx-8" key={"paragrafo-" + nome}>
                                    {mockedBadges[nome]}
                                </p>
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
                        <h1>Ocorreu um erro ao buscar o feed</h1>
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
