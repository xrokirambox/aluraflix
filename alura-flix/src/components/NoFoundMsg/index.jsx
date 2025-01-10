import styles from "./NoFoundMsg.module.css";

function NoFoundMsg ({icon, msg}) {
    return(
        <section className={styles.sectionNoFound}>
                <i className={`bi ${icon}`}></i>
                <h3 className="lead fs-3">{msg}</h3>
        </section>
    )

}

export default NoFoundMsg;