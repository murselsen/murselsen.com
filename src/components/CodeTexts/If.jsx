import styles from "./styles/If.module.css";

const If = ({ value }) => {
  return (
    <p className={styles.ifCode}>
      <span className={styles.ifConst}>if </span> ({value}){" {"}
    </p>
  );
};

export default If;
