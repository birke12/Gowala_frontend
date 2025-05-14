import styles from "./introCards.module.css";

const cards = [
  {
    img: "/cards/01.png",
    title: "Farmens teknologi",
    description:
      "Vores avancerede teknologi kombinerer effektivitet med høj hygiejnestandard, hvilket garanterer produkter af den bedste kvalitet.",
  },
  {
    img: "/cards/02.png",
    title: "Farmens landmænd",
    description:
      "Landmændene hos Gowala Farms er dedikeret til dyrevelfærd og bæredygtigt landbrug, hvor omsorg for køerne altid kommer i første række.",
  },
  {
    img: "/cards/03.png",
    title: "Fra mejeriet til forbrugeren",
    description:
      "Transporten fra mejeriet til butikken foregår hurtigt og skånsomt for at bevare produkternes friskhed og kvalitet.",
  },
];

const IntroCard = () => {
  return (
    <section className={styles.introSection}>
      <div className={styles.header}>
        <h1>Den førende mælkeproducent</h1>
        <h2>Sund og nærende mælk siden 1975</h2>
      </div>

      <div className={styles.cardContainer}>
        {cards.map((card, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.cardContent}>
              <img src={card.img} alt={card.title} className={styles.cardImg} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntroCard;
