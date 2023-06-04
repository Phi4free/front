import {
  Container,
  Vertical,
  Horizontal,
  Name,
  Info,
  Points,
  Year,
  Seasons,
  Description,
  Buttons,
  Genres,
  Button,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Featured({ item }) {
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + "...";
  }

  return (
    <Container>
      <Vertical>
        <Horizontal>
          <Name>Explore, aprenda, evolua.</Name>
          <Info>
            <Points>Seja bem-vindo(a)</Points>
          </Info>
          <Description>
            A busca pelo conhecimento é como abrir as janelas da mente para um
            mundo de possibilidades - Carl Sagan
          </Description>
          <Buttons>
            <Button
              href="/#/home"
              style={{
                backgroundColor: "#333",
                color: "#fff",
              }}
            >
              Minha lista
            </Button>
          </Buttons>
        </Horizontal>
      </Vertical>
    </Container>
  );
}
