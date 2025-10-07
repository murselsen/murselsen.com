import styles from "./styles/Method.module.css";

const Method = ({ value = [], text }) => {
  return (
    <p className={styles.methodCode}>
      <span className={styles.methodName}>{value.join(".")}</span>(
      {text && <span className={styles.methodText}>'{text}'</span>});
    </p>
  );
};

export default Method;
