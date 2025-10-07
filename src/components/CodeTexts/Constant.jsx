import styles from "./styles/Constant.module.css";

const Constant = ({ value }) => {
  return <span className={styles.constant}>{value}</span>;
};

export default Constant;
