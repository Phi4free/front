import {
  MovieRow,
  TitleList,
  Button,
  ListArea,
  List,
  Item,
  ItemImg,
} from "./styles";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function ArticlesRow({ title, items }) {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);

    if (x > 0) {
      x = 0;
    }

    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;

    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }

    setScrollX(x);
  };

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
          style={{ marginLeft: scrollX, width: items.results.length * 150 }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <Item key={key}>
                <ItemImg
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt="item.original_title"
                />
              </Item>
            ))}
        </List>
      </ListArea>
    </MovieRow>
  );
}
