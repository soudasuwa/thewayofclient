import ProgressBar from "./ProgressBar"
import styles from "./styles/Item.module.css"

const ItemSkeleton = () => {
  return (
    <div className={styles.item}>
      <div className={styles.main}>
        <div className={styles.icon}></div>
        <div className="skeleton line double"></div>
        <div className={styles.info}></div>
      </div>
      <ProgressBar />
    </div>
  )
}

export default ItemSkeleton
