import {
  Container,
  Vertical,
  Horizontal,
  Name,
  Info,
  Points,
  Description,
  Buttons,
  Button,
} from "./styles";

export default function Featured() {
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
