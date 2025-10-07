import styles from "./styles/TextValue.module.css";

const TextValue = ({ value }) => {
  return <span className={styles.value}>"{value}"</span>;
};

export default TextValue;
