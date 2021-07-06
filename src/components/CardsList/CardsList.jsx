import styles from "./CardsList.module.scss";
import Card from "../Card";
import Spinner from "../Spinner";
import toast, { Toaster } from "react-hot-toast";

toast.error("Bad request", {
  style: {
    background: "#ff8615",
    color: "#000000",
  },
});

export default function CardsList({ cards, loading, error }) {
  if (loading) {
    return (
      <div className={styles.spinnerContainer}>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <ul className={styles.cardsList}>
        {cards?.map((card) => (
          <Card key={card.name} card={card}></Card>
        ))}
      </ul>
      {error !== null ? <Toaster position="top-center" /> : ""}
    </>
  );
}
