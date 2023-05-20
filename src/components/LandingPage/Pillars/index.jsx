import { useTranslation } from "react-i18next";
import { card, cardENG } from "../../../assets/LandingPage";

import styles, { layout } from "../../../styles/style";
import Button from "../Button";

export default function Pillars() {

  const { t } = useTranslation();

  const switchBanner = () => {
    switch (t('langSigle')) {
      case "pt-BR":
        return <img src={card} alt="billing" className="w-[100%] max-w-[500px] h-[100%]" />
      case "en":
        <img src={cardENG} alt="billing" className="w-[100%] max-w-[500px] h-[100%]" />
      default:
        console.log("ESCOLHI: " + t( 'langSigle'))
        return <img src={cardENG} alt="billing" className="w-[100%] max-w-[500px] h-[100%]" />
    }
  }

  return (
    <section id="pillars" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>{t('pillarsTitle')}</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t('pillarsPar')}
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={layout.sectionImg}>
        {
          switchBanner()
        }
      </div>
    </section>
  );
}
