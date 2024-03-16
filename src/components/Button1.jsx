import React from "react";
// import './Button1.css"
// To prevent conflicts, we can use postcss by adding module
import styles from "./Button1.module.css";

export default function Button1() {
  return <button className={styles.button}>Button1</button>;
}
