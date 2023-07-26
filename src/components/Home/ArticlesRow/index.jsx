import {
    MovieRow,
    TitleList,
    Button,
    ListArea,
    List,
    Item,
    ItemInfo,
    ItemHeader,
    ItemTitle,
    ItemAdd,
    ItemAuthor,
    ItemDescription,
    Loading,
} from "./styles";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
    fetchUserData,
    addUserToReadList,
    removeUserToReadList,
    wait,
} from "../../../services/utils";

export default function ArticlesRow({ title, items }) {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [user, setUser] = useState(null);
    const [scrollX, setScrollX] = useState(0);

    useEffect(() => {
        fetchUserData().then((data) => {
            switch (data.status) {
                case 200:
                    setUser(data.body.data);
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

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 1.5);

        if (x > 0) {
            x = 0;
        }

        setScrollX(x);
    };

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 1.5);
        let listW = items.length * 250;

        if (window.innerWidth - (listW + 60) > 0) {
            x = 0;
        } else if (window.innerWidth - listW > x) {
            x = window.innerWidth - listW - 80;
        }

        setScrollX(x);
    };

    const name = (itemName) => {
        if (!itemName) {
            return "";
        }
        let name = itemName;
        if (name.length > 35) {
            name = name.substring(0, 35) + "...";
        }
        return name;
    };

    const description = (itemDescription) => {
        if (!itemDescription) {
            return "";
        }
        let description = itemDescription;
        if (description.length > 75) {
            description = description.substring(0, 75) + "...";
        }
        return description;
    };

    const readArticle = (id) => {
        navigate(`/read-article/${id}`);
    };

    const toggleArticleStatusOnList = async (e, id) => {
        e.stopPropagation();

        let cloneUser = structuredClone(user);

        if (cloneUser.listaLeitura.includes(id)) {
            if ((await removeUserToReadList(id)) == 200) {
                const index = cloneUser.listaLeitura.indexOf(id);
                cloneUser.listaLeitura.splice(index, 1);
            }
        } else if ((await addUserToReadList(id)) == 200) {
            cloneUser.listaLeitura.push(id);
        }

        setUser(cloneUser);
    };

    function isUserTypeTeacher() {
        return user?.role == "Teacher";
    }

    function checkUpdateList(id) {
        return user?.listaLeitura.includes(id);
    }

    function isAuthorArticle(autorId) {
        // editar -- Onde vamos pegar o id?
        return user?._id == autorId;
    }

    return (
        <MovieRow>
            <TitleList>{title}</TitleList>
            <Button
                className="button"
                style={{
                    left: 0,
                }}
                onClick={handleLeftArrow}
            >
                <FontAwesomeIcon
                    icon={icon({
                        name: "chevron-left",
                        style: "solid",
                    })}
                    style={{
                        fontSize: "40px",
                    }}
                />
            </Button>
            <Button
                className="button"
                style={{
                    right: 0,
                }}
                onClick={handleRightArrow}
            >
                <FontAwesomeIcon
                    icon={icon({
                        name: "chevron-right",
                        style: "solid",
                    })}
                    style={{
                        fontSize: "40px",
                    }}
                />
            </Button>
            <ListArea>
                <List
                    style={{ marginLeft: scrollX, width: items.length * 250 }}
                >
                    {items.length == 0 ? (
                        /** É suposto que todas as categorias possuam ao menos 1 artigo. 
                         * Então caso ela esteja vazia significa que não foi carregado ainda, 
                         * ou teve algum erro durante o carregamento */
                        <div className="flex">
                            <Loading />
                        </div>
                    ) : null}

                    {items.length > 0 &&
                        items.map((item, key) => (
                            <Item
                                key={key}
                                img="https://i.pinimg.com/236x/53/44/7d/53447dacdc58df8211e6906e8628b1c6.jpg"
                                onClick={() => readArticle(item._id)}
                            >
                                <ItemInfo>
                                    <ItemHeader>
                                        <ItemTitle>
                                            {name(item.titulo)}
                                        </ItemTitle>
                                        <ItemAdd
                                            onClick={(e) =>
                                                toggleArticleStatusOnList(
                                                    e,
                                                    item._id
                                                )
                                            }
                                        >
                                            {isUserTypeTeacher() ?
                                            // Faz trataiva do icone do caso professor
                                                isAuthorArticle(item.autorId) ? (
                                                    // Coloca icone e comportamento de edição
                                                    <FontAwesomeIcon
                                                    icon={icon({
                                                        name: "pen",
                                                        style: "solid",
                                                    })}
                                                    style={{
                                                        fontSize: "16px",
                                                        color: "#FFC300",
                                                    }}
                                                />
                                                ) :
                                                null // Coloca icone e comportamento de interação (Pensar)
                                            :
                                            // Faz tratativa caso estudante (Futuramente precisa de else p/ curador e moderador)
                                            checkUpdateList(item._id) ? (
                                                <FontAwesomeIcon
                                                    icon={icon({
                                                        name: "check",
                                                        style: "solid",
                                                    })}
                                                    style={{
                                                        fontSize: "16px",
                                                        color: "#FFC300",
                                                    }}
                                                />
                                            ) : (
                                                <FontAwesomeIcon
                                                    icon={icon({
                                                        name: "plus",
                                                        style: "solid",
                                                    })}
                                                    style={{
                                                        fontSize: "16px",
                                                        color: "#FFC300",
                                                    }}
                                                />
                                            )}
                                        </ItemAdd>
                                    </ItemHeader>
                                    <ItemAuthor>
                                        {t("author")} {name(item.autor)}
                                    </ItemAuthor>
                                    {/* <ItemDescription>
                    {description(item.conteudo)}
                  </ItemDescription> */}
                                </ItemInfo>
                            </Item>
                        ))}
                </List>
            </ListArea>
        </MovieRow>
    );
}
