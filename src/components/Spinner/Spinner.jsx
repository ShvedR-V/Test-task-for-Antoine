import styles from "./Spinner.module.scss";

export default function Spinner() {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__bar}></div>
      <div className={styles.loader__bar}></div>
      <div className={styles.loader__bar}></div>
      <div className={styles.loader__bar}></div>
      <div className={styles.loader__bar}></div>
      <div className={styles.loader__ball}></div>
    </div>
  );
}
