import styles, { layout } from "../../../styles/style";
import Button from "../Button";
import { send, shield, star } from "../../../assets/LandingPage";

export default function Business() {
  const features = [
    {
      id: "feature-1",
      icon: star,
      title: "Profesores qualificados",
      content:
        "Selecionamos apenas profissionais comprovadamente especialistas para criarem conteúdos.",
    },
    {
      id: "feature-2",
      icon: shield,
      title: "Material confiável",
      content:
        "Nossa equipe de curadoria possui um rígido processo de análise antes da publicação de um novo material.",
    },
    {
      id: "feature-3",
      icon: send,
      title: "Compartilhe com os amigos",
      content:
        "Compartilhe com os amigos nossos conteúdos e evoluam juntos nessa trajetória de conhecimento.",
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
        <h2 className={styles.heading2}>Estude com qualidade</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          A Phi4Free conta com professores altamente qualificados e uma
          curadoria de conteúdo impecável. Você terá acesso a uma comunidade de
          aprendizado única e inspiradora, com artigos, quizzes, desafios e
          fóruns para compartilhar suas dúvidas e descobertas com outros
          estudantes e professores.
          <br />
          Você poderá aprender sobre assuntos que realmente importam, como como
          cuidar da sua saúde física e mental, como gerenciar suas finanças
          pessoais, como manter uma rotina funcional e saudável e até mesmo como
          desenvolver seu pensamento crítico e filosófico sobre as questões mais
          profundas da vida. E o melhor de tudo: Tudo isso de forma
          completamente gratuita!
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
