import { Container } from "./styles";
import { useEffect, useState } from "react";
import { fetchArticle } from "./articleConstructor";
import Header from "../../components/Home/Header";

export function ReadArticle() {
  const [blackHeader, setBlackHeader] = useState(false);
  const [article, setArticle] = useState({});

  useEffect(() => {
    fetchArticle().then((data) => {
      switch (data.status) {
        case 200:
          clearArticles();
          setArticle(data.body.data);
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
    </Container>
  );
}
