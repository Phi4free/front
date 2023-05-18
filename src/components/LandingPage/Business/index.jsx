import styles, { layout } from "../../../styles/style";
import Button from "../Button";
import { send, shield, star } from "../../../assets/LandingPage";
import { useTranslation } from "react-i18next";

export default function Business() {
  const { t } = useTranslation();
  const features = [
    {
      id: "feature-1",
      icon: star,
      title: t('busItem1Title'),
      content:
      t('busItem1Par'),
    },
    {
      id: "feature-2",
      icon: shield,
      title: t('busItem2Title'),
      content:
      t('busItem2Par'),
    },
    {
      id: "feature-3",
      icon: send,
      title: t('busItem3Title'),
      content:
      t('busItem3Par'),
    },
  ];

  const FeatureCard = ({ icon, title, content, index }) => (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimYellow`}
      >
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );

  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>{t('businessTitle')}</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t('businessPar1')}
          <br />
          {t('businessPar2')}
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}
