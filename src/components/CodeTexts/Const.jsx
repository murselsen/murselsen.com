import styles from "./styles/Const.module.css";

const Const = ({ value, children }) => {
  return (
    <p className={styles.code}>
      <span className={styles.constant}>const</span>
      <span className={styles.variable}>{value}</span>
      {/* <span>=</span> */}
      {children ? (
        <>
          <span>=</span> {children}
        </>
      ) : (
        <span>;</span>
      )}
    </p>
  );
};

export default Const;
