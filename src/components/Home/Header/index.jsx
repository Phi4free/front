import { Container, Logo, User, LogoImg, UserImg } from "./styles";
import logo from "../../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Header({ black }) {
  const background = {
    transparent: "transparent",
    black: "#1A1A1A",
  };
  return (
    <Container theme={black ? background.black : background.transparent}>
      <Logo>
        <a href="/#/home">
          <LogoImg src={logo} alt="Phi4free" />
        </a>
      </Logo>
      <User>
        <UserImg href="/">
          <FontAwesomeIcon
            icon={icon({
              name: "user",
              style: "solid",
            })}
            style={{
              fontSize: "18px",
              color: "#FFC300"
            }}
          />
        </UserImg>
      </User>
    </Container>
  );
}
