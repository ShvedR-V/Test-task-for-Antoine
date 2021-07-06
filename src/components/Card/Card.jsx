import styles from "./Card.module.scss";

const IMAGE_REG_EXP = /^https:\/\/[a-z]*.[a-z]*.com\//g;

export default function Card({ card }) {
  const cardExpertsName = card.experts[0].firstName + card.experts[0].lastName;

  const domen = card.image.uri.match(IMAGE_REG_EXP)[0];

  const cardImage =
    domen + `resize/${342}x/` + card.image.uri.slice(domen.length);

  return (
    <li className={styles.card}>
      <div className={styles.card_wrapper}>
        <img src={cardImage} alt="" />
      </div>
      <div className={styles.card_info}>
        <p className={styles.card_category}>{card.categories[0].name}</p>
        <p className={styles.card_name}>{card.name}</p>
        <p className={styles.card_expert_name}>{cardExpertsName}</p>
        <p className={styles.card_expert_title}>{card.experts[0].title}</p>
        <p className={styles.card_expert_company}>{card.experts[0].company}</p>
      </div>
    </li>
  );
}
