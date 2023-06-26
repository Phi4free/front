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

export function ReadArticle() {
  const [blackHeader, setBlackHeader] = useState(false);
  const [article, setArticle] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchArticle(id).then((data) => {
      switch (data.status) {
        case 200:
          setArticle(data.body.data[0]);
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
