import Item from "./Item"
import Iterator from "./Iterator"

import styles from "./styles/Order.module.css"

const OrderSkeleton = ({ items }: { items: number }) => (
  <div className="order">
    <h2>
      Order <div className="skeleton line double"></div>
    </h2>
    <h4>
      <div className="skeleton line"></div>
    </h4>

    <h3>Items</h3>
    <div className={styles.card}>
      <Iterator array={Array(items).fill(null)}>
        {() => <Item/>}
      </Iterator>
    </div>
  </div>
)

OrderSkeleton.defaultProps = {
  items: 3,
}

export default OrderSkeleton
