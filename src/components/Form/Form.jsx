import styles from "./Form.module.scss";
import {useState} from 'react'

function Input() {
    const [value, setValue]=useState('')
    const handleChange =(e)=> setValue(e.target.value)
  return (
    <input
      value={value}
      onChange={handleChange}
      className={styles.input}
      placeholder="Type any keyword"
    />
  );
}

export default Input;
