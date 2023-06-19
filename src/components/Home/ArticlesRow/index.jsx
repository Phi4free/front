import {
  MovieRow,
  TitleList,
  Button,
  ListArea,
  List,
  Item,
  ItemInfo,
  ItemHeader,
  ItemTitle,
  ItemAdd,
  ItemAuthor,
  ItemDescription,
} from "./styles";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function ArticlesRow({ title, items }) {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 1.5);

    if (x > 0) {
      x = 0;
    }

    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 1.5);
    let listW = items.results.length * 250;

    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }

    setScrollX(x);
  };

  const name = (itemName) => {
    if (!itemName) {
      return "";
    }
    let name = itemName;
    if (name.length > 35) {
      name = name.substring(0, 35) + "...";
    }
    return name;
  };

  const description = (itemDescription) => {
    if (!itemDescription) {
      return "";
    }
    let description = itemDescription;
    if (description.length > 75) {
      description = description.substring(0, 75) + "...";
    }
    return description;
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
        <List style={{ marginLeft: scrollX, width: items.length * 250 }}>
          {items.length > 0 &&
            items.map((item, key) => (
              <Item
                key={key}
                img="https://i.pinimg.com/236x/81/55/a5/8155a5862dc9bc67a3e553802ab6e94a.jpg"
              >
                <ItemInfo>
                  <ItemHeader>
                    <ItemTitle>{name(item.titulo)}</ItemTitle>
                    <ItemAdd>
                      <FontAwesomeIcon
                        icon={icon({
                          name: "plus",
                          style: "solid",
                        })}
                        style={{
                          fontSize: "16px",
                          color: "#FFC300",
                        }}
                      />
                    </ItemAdd>
                  </ItemHeader>
                  <ItemAuthor>Autor: {name(item.autorId)}</ItemAuthor>
                  {/* <ItemDescription>
                    {description(item.conteudo)}
                  </ItemDescription> */}
                </ItemInfo>
              </Item>
            ))}
        </List>
      </ListArea>
    </MovieRow>
  );
}
