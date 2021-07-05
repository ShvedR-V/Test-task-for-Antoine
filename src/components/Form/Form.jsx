import styles from "./Form.module.scss";
import {useState} from 'react'

function Input({onChange, value}) {
   
  return (
    <input
      value={value}
      onChange={onChange}
      className={styles.input}
      placeholder="Type any keyword"
    />
  );
}

export default Input;
