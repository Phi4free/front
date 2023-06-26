import { Container, Lists, Footer } from "./styles";
import { useEffect, useState } from "react";
import ArticlesRow from "../../components/Home/ArticlesRow";
import Featured from "../../components/Home/Featured";
import Header from "../../components/Home/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { fetchArticlesList } from "./articleConstructor";
import { useTranslation } from "react-i18next";
//import Footer from "../../components/LandingPage/Footer"

export function Home() {
    const { t } = useTranslation();
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
            switch (article.disciplina) {
                case "physical":
                    setPhysicalArticles((prevArticles) => [
                        ...prevArticles,
                        article,
                    ]);
                    break;
                case "finance":
                    setFinanceArticles((prevArticles) => [
                        ...prevArticles,
                        article,
                    ]);
                    break;
                case "philosophy":
                    setPhilosophyArticles((prevArticles) => [
                        ...prevArticles,
                        article,
                    ]);
                    break;
                case "feature":
                    setFeatureArticles((prevArticles) => [
                        ...prevArticles,
                        article,
                    ]);
                    break;
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
                <ArticlesRow
                    title={t("financeTitle")}
                    items={financeArticles}
                />
                <ArticlesRow
                    title={t("philosophyTitle")}
                    items={philosophyArticles}
                />
                <ArticlesRow
                    title={t("physicalTitle")}
                    items={physicalArticles}
                />
                <ArticlesRow
                    title={t("featureTitle")}
                    items={featureArticles}
                />
            </Lists>

            <Footer>
                {t('madeWith')}{" "}
                <span role="img" aria-label="coração">
                    <FontAwesomeIcon
                        icon={icon({
                            name: "heart",
                            style: "solid",
                        })}
                    />
                </span>{" "}
                {t('byPhi')}
            </Footer>
        </Container>
    );
}
