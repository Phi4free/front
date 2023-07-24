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
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Featured() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Container>
      <Vertical>
        <Horizontal>
          <Name>{t('explore')}</Name>
          <Info>
            <Points>{t('welcome')}</Points>
          </Info>
          <Description>
            {t('carlsagan')}
          </Description>
          <Buttons>
            <Button
              onClick={() => navigate("/meu-perfil")}
              style={{
                backgroundColor: "#333",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              {t("myList")}
            </Button>
          </Buttons>
        </Horizontal>
      </Vertical>
    </Container>
  );
}
