import styles from "./Titel.module.scss";

function Title({ text }) {
  return <div className={styles.title_container}><h1 className={styles.title}>{text}</h1></div>;
}

export default Title;
