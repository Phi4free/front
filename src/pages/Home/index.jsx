import { Container, Lists, Footer } from "./styles";
import { useEffect, useState } from "react";
import ArticlesRow from "../../components/Home/ArticlesRow";
import Featured from "../../components/Home/Featured";
import Header from "../../components/Home/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { fetchArticlesList } from "./articleConstructor";

export function Home() {
  const [blackHeader, setBlackHeader] = useState(false);
  const [articlesList, setArticlesList] = useState([]);
  const [physicalArticles, setPhysicalArticles] = useState([]);
  const [financeArticles, setFinanceArticles] = useState([]);
  const [philosophyArticles, setPhilosophyArticles] = useState([]);
  const [featureArticles, setFeatureArticles] = useState([]);

  useEffect(() => {
    fetchArticlesList().then((data) => {
      switch (data.status) {
        case 200:
          clearArticles();
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
    categorizeArticlesByDiscipline();
  }, [articlesList]);
  const clearArticles = () => {
    setPhysicalArticles([]);
    setFinanceArticles([]);
    setPhilosophyArticles([]);
    setFeatureArticles([]);
  };
  const categorizeArticlesByDiscipline = () => {
    articlesList.forEach((article) => {
      if (article.disciplina === "physical") {
        setPhysicalArticles((prevArticles) => [...prevArticles, article]);
      } else if (article.disciplina === "finance") {
        setFinanceArticles((prevArticles) => [...prevArticles, article]);
      } else if (article.disciplina === "philosophy") {
        setPhilosophyArticles((prevArticles) => [...prevArticles, article]);
      } else if (article.disciplina === "feature") {
        setFeatureArticles((prevArticles) => [...prevArticles, article]);
      }
    });
  };

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
      <Featured />
      <Lists>
        <ArticlesRow title="Finanças" items={financeArticles} />
        <ArticlesRow title="Filosofia" items={philosophyArticles} />
        <ArticlesRow title="Física" items={physicalArticles} />
        <ArticlesRow title="Funcional" items={featureArticles} />
      </Lists>

      <Footer>
        Feito com{" "}
        <span role="img" aria-label="coração">
          <FontAwesomeIcon
            icon={icon({
              name: "heart",
              style: "solid",
            })}
          />
        </span>{" "}
        por Phi4Free
      </Footer>
    </Container>
  );
}
