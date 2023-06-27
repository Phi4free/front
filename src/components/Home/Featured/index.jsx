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

export default function Featured() {
  const { t } = useTranslation();

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
              href="/#/home"
              style={{
                backgroundColor: "#333",
                color: "#fff",
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
