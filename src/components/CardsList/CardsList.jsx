import styles from "./CardsList.module.scss";
import Card from "../Card";
import Spinner from "../Spinner";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

export default function CardsList({ cards, loading, error }) {
  useEffect(() => {
    if (error) {
      toast.error(error, {
        style: {
          background: "#ff8615",
          color: "#000000",
        },
      });
    }
  }, [error]);

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
      <Toaster position="top-center" />
    </>
  );
}
