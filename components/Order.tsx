import Item from "./Item"
import OrderSkeleton from "./OrderSkeleton"

import styles from "./styles/Order.module.css"

const Order = ({ order }: { order?: Definitions.Order }) => {
  if (order === undefined) return <OrderSkeleton />

  return (
    <div className={styles.order}>
      <h2>
        Order #{order.orderId} {order.orderStatus}
      </h2>
      <h4>
        {order.billing.firstName} {order.billing.lastName}
      </h4>

      <h3>Items</h3>
      <div className={styles.card}>
        {order.lineItems.map((item) => (
          <Item key={item.productId} item={item} />
        ))}
      </div>
    </div>
  )
}

Order.defaultProps = {
  order: undefined,
}

export default Order
