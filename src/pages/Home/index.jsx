import { Container, Lists, Footer } from "./styles";
import articles from "../../services/articles";
import { useEffect, useState } from "react";
import ArticlesRow from "../../components/Home/ArticlesRow";
import Featured from "../../components/Home/Featured";
import Header from "../../components/Home/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export function Home() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista total
      let list = await articles.getHomeList();
      setMovieList(list);

      // Pegando o Featured
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await articles.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    };

    loadAll();
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
      {featuredData && <Featured item={featuredData} />}
      <Lists>
        {movieList.map((item, key) => (
          <ArticlesRow key={key} title={item.title} items={item.items} />
        ))}
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
