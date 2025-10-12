import styles from "./styles/Link.module.css";

const Link = ({ value }) => {
  return (
    <a href={value} target={"_blank"} className={styles.value}>
      "{value}"
    </a>
  );
};

export default Link;
