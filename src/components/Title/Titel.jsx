import styles from  "./Titel.module.scss";

function Title({ text }) {
  return <h1 className={styles.title}>{text}</h1>;
}

export default Title;