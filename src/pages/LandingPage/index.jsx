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
