import { useState } from "react"
import ItemSkeleton from "./ItemSkeleton"
import ProgressBar from "./ProgressBar"

import styles from "./styles/Item.module.css"

const Item = ({ item }: { item?: Definitions.LineItem }) => {
  const [done, setDone] = useState(0)

  if (item === undefined) return <ItemSkeleton />

  const info = () => (done === item.quantity ? setDone(0) : setDone(done + 1))

  return (
    <div className={styles.item}>
      <div className={styles.main}>
        <div className={styles.icon}></div>
        <div className={styles.name}>
          <div className={styles.label}>{item.name}</div>
          <div className={styles.count}>
            <b>{done}</b>/{item.quantity}
          </div>
        </div>
        <div className={styles.info} onClick={info}></div>
      </div>
      <ProgressBar current={done} max={item.quantity} />
    </div>
  )
}

export default Item
