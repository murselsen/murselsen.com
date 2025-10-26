import styles from "./styles/Method.module.css";

const Method = ({value = [], text = false, children}) => {
    return (
        <p className={styles.methodCode}>
            <span className={styles.methodName}>{value.join(".").toString()}</span>(
            {text && <span className={styles.methodText}>{text}</span>}
            {children ? children : ");"}


        </p>
    );
};

export default Method;
