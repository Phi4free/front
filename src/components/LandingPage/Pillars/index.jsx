import { card } from "../../../assets/LandingPage";
import styles, { layout } from "../../../styles/style";
import Button from "../Button";

export default function Pillars() {
  return (
    <section id="pillars" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Nossos pilares</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Viver uma vida equilibrada e plena requer uma abordagem holística que
          abrange diferentes áreas do conhecimento e habilidades práticas. O
          Phi4free abrangendo educação financeira, física, filosófica e
          funcional oferece uma jornada única para auxiliar a desenvolver
          competências fundamentais para uma vida saudável, equilibrada e
          satisfatória.
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="billing" className="w-[100%] max-w-[500px] h-[100%]" />
      </div>
    </section>
  );
}
