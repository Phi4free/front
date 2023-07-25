import {
    Container,
    Item,
    Info,
    InfoData,
    Title,
    Banner,
    Author,
    PublicationDate,
    Content,
    Subject,
    LoaderContainer,
    Loading,
} from "./styles";
import { useEffect, useState } from "react";
import { fetchArticle } from "./articleConstructor";
import Header from "../../components/Home/Header";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";

export function ReadArticle() {
    const [article, setArticle] = useState({
        _id: "",
        disciplina: "",
        titulo: "",
        conteudo: "",
        dataPub: "",
        autor: "",
    });
    const [blackHeader, setBlackHeader] = useState(false);
    const { t } = useTranslation();
    const { id } = useParams();

    useEffect(() => {
        window. scrollTo({ top: 0, left: 0})
        fetchArticle(id).then((response) => {
            switch (response.status) {
                case 200:
                    setFormatArticle(response.body.data);
                    break;
                case 401:
                    navigate("/session-expired");
                    break;
                default:
                    console.log(response.status);
                    break;
            }
        });
    }, []);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        };

        window.addEventListener("scroll", scrollListener);

        return () => {
            window.removeEventListener("scroll", scrollListener);
        };
    }, []);

    function setFormatArticle(response) {
        const dataFormatada = formatDate(response.dataPub);
        const disciplinaFormatada = formatDisciplina(response.disciplina);

        setArticle({
            _id: response._id,
            disciplina: disciplinaFormatada,
            titulo: response.titulo,
            conteudo: response.conteudo,
            dataPub: dataFormatada,
            autor: response.autor,
        });
    }

    function formatDate(dataString) {
        const data = new Date(dataString);

        const dia = String(data.getDate()).padStart(2, "0");
        const mes = String(data.getMonth() + 1).padStart(2, "0");
        const ano = data.getFullYear();

        switch (localStorage.getItem("i18nextLng")) {
            case "en":
                return `${mes}/${dia}/${ano}`;
            case "pt-BR":
                return `${dia}/${mes}/${ano}`;
            default: //en
                return `${mes}/${dia}/${ano}`;
        }
    }

    function formatDisciplina(disciplina) {
        if (disciplina != null) {
            return t(`${disciplina}Title`);
        }
    }

    return (
        <Container>
            <Header black={blackHeader} />
            {
            /** Precisamos de um parâmetro do artigo para ter certeza de que ele teve fetch
             * o parâmetro escolhido aqui foi o título, mas poderia ser qualquer um outro.
             */
            article.titulo == "" ? (
                <LoaderContainer>
                    <Loading />
                    <br/>
                    <h1>{t('loadingArt')}</h1>
                </LoaderContainer>
            ) : (
                <>
                    <Item>
                        <Info>
                            <InfoData>
                                <Title>{article.titulo}</Title>
                                <div className="py-4">
                                    <Author>
                                        <b>{t("author")}</b> {article.autor}
                                    </Author>
                                    <PublicationDate>
                                        <b>{t("pubDate")}</b> {article.dataPub}
                                    </PublicationDate>
                                    <Subject>
                                        <b>{t("discipline")}</b>{" "}
                                        {article.disciplina}
                                    </Subject>
                                </div>
                            </InfoData>
                            <Banner img="https://i.pinimg.com/236x/53/44/7d/53447dacdc58df8211e6906e8628b1c6.jpg"></Banner>
                        </Info>
                        <Content>{parse(article.conteudo)}</Content>
                    </Item>
                </>
            )}
        </Container>
    );
}
