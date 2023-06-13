import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export function Feed() {
    const [selectedFeed, setSelectedFeed] = useState('0');

    useEffect(() => {
        renderMockedItems();
        console.log(selectedFeed)
    }, [selectedFeed]);

    const feeds = {
        0: "Conquistas",
        1: "Lista de estudo",
        2: "Certificados",
    };

    function renderMockedItems() {
        const mockedBadges = {
            "Pioneiros da Phi4Free": "Seja um dos 100 primeiros usuários da plataforma",
            "Primeiros Passos": "Leia um artigo",
            "Estudante Coruja": "Complete 1 dia de estudos"
        }

        switch (selectedFeed) {
            case '0':
                return <div>
                {Object.keys(mockedBadges).map((nome) => (
                    <a key={nome}>{nome}</a>
                ))
                }
                
                </div>;
            case '1':
                break;
            case '2':
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
            <div className="flex justify-evenly py-4 mt-2">
                {Object.keys(feeds).map((id) => (
                    <a
                        key={id + "feedA"}
                        className={`${
                            selectedFeed == id
                                ? "hover:text-white"
                                : "opacity-50"
                        } cursor-pointer hover:text-secondary hover:opacity-100`}
                        onClick={() => {
                            setSelectedFeed(id);
                        }}
                    >
                        {feeds[id]}
                    </a>
                ))}
            </div>
            {renderMockedItems()}
        </>
    );
}
