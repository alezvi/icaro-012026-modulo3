import PageTitle from "./PageTitle"
import styles from "../styles/SuperGiant.module.css"

export default function SuperGianteTitle({title}) {
    return <PageTitle title={title} className={styles.giant} />
}
