import { Container, Logo, User, LogoImg, UserImg } from "./styles";

export default function Header({black}) {
  const background = {
    transparent: "transparent",
    black: "#1A1A1A"
  }
  return (
    <Container theme={black ? background.black : background.transparent}>
      <Logo>
        <a href="/">
          <LogoImg
            src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
            alt="Netflix"
          />
        </a>
      </Logo>
      <User>
        <a href="/">
          <UserImg
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Usuário"
          />
        </a>
      </User>
    </Container>
  );
}
