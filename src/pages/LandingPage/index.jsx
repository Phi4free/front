import styles from "../../styles/style";
import {
  Future,
  Business,
  Pillars,
  CTA,
  Footer,
  Navbar,
  Hero,
} from "../../components/LandingPage";

export function LandingPage() {
// to do: Estudar forma de atualizar navbar e banner pilares sempre que alterar o idioma sem ter que recarregar a página
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Business />
          <Future />
          <Pillars />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}
