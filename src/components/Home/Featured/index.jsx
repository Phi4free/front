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
    description = description.substring(0, 200) + '...'
  }

  return (
    <Container
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <Vertical>
        <Horizontal>
          <Name>{item.original_name}</Name>
          <Info>
            <Points>{item.vote_average} pontos</Points>
            <Year>{firstDate.getFullYear()}</Year>
            <Seasons>
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </Seasons>
          </Info>
          <Description>{description}</Description>
          <Buttons>
            <Button
              href={`/watch/${item.id}`}
              style={{
                backgroundColor: "#fff",
                color: "#000",
              }}
            >
              <FontAwesomeIcon
                icon={icon({
                  name: "play",
                  style: "solid",
                })}
              />{" "}
              Assistir
            </Button>
            <Button
              href={`/list/add/${item.id}`}
              style={{
                backgroundColor: "#333",
                color: "#fff",
              }}
            >
              + Minha lista
            </Button>
          </Buttons>
          <Genres>
            <strong>Gênero:</strong> {genres.join(", ")}
          </Genres>
        </Horizontal>
      </Vertical>
    </Container>
  );
}
