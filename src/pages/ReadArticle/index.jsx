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
} from "./styles";
import { useEffect, useState } from "react";
import { fetchArticle } from "./articleConstructor";
import Header from "../../components/Home/Header";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

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

    function formatDisciplina(disciplina){
      if(disciplina != null){
        return t(`${disciplina}Title`)
      }
    }
    
    return (
        <Container>
            <Header black={blackHeader} />
            <Item>
                <Info>
                    <InfoData>
                        <Title>{article.titulo}</Title>
                        <div>
                            <Author>
                                <b>Autor:</b> {article.autor}
                            </Author>
                            <PublicationDate>
                                <b>Data de publicação:</b> {article.dataPub}
                            </PublicationDate>
                            <Subject>
                                <b>Disciplina:</b> {article.disciplina}
                            </Subject>
                        </div>
                    </InfoData>
                    <Banner img="https://i.pinimg.com/236x/81/55/a5/8155a5862dc9bc67a3e553802ab6e94a.jpg"></Banner>
                </Info>
                <Content>{article.conteudo}</Content>
            </Item>
        </Container>
    );
}
