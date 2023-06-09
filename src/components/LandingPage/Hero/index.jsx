import styles from "../../../styles/style";
import { discount, lampada } from "../../../assets/LandingPage";
import GetStarted from "../GetStarted";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">100%</span> Free
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            {t('heroTitle1')} <br className="sm:block hidden" />{" "}
            <span className="text-gradient">{t('heroTitle2')}</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        {t('heroTitle3')}
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t('heroAbout')}
        </p>
        <ul className={`${styles.paragraph} max-w-[470px] mt-5 ml-5`}>
          <li>{t('Financial')}</li>
          <li>{t('Philosophical')}</li>
          <li>{t('Physical')}</li>
          <li>{t('Functional')}</li>
        </ul>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={lampada}
          alt="billing"
          className="h-[100%] ml-40 relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 yellow__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 gray__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
}
