import styles, { layout } from "../../../styles/style";

export default function Future() {
  const videoId = "tcLLTsP3wlo";
  const posterUrl = "https://i.ytimg.com/vi/tcLLTsP3wlo/hq720.jpg";

  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&mute=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube Video Player"
          width="640"
          height="360"
          className="relative z-[5]"
          poster={posterUrl}
        ></iframe>

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full yellow__gradient" />
        {/* gradient end */}
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Prepare-se para o futuro</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Nossos professores são especialistas em suas áreas de atuação e estão
          sempre atualizados com as tendências e práticas mais recentes. E com a
          curadoria de conteúdo da Phi4Free, você tem certeza de que está
          recebendo informações confiáveis e precisas. Estude sem distrações,
          sem sair de casa.
        </p>
      </div>
    </section>
  );
}
