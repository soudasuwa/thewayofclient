import useSWR from "swr"
import Iterator from "./Iterator"
import Order from "./Order"

type Props = {
  skeletonLength: number
}

const OrdersList = ({ skeletonLength }: Props) => {
  //@ts-ignore
  const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json())
  const { data, error } = useSWR<Definitions.Order[]>("/api/orders", fetcher)

  if (data === undefined)
    return (
      <Iterator array={Array(skeletonLength).fill(null)}>
        {() => <Order />}
      </Iterator>
    )

  return <Iterator array={data}>{(order) => <Order order={order} />}</Iterator>
}

OrdersList.defaultProps = {
  skeletonLength: 6,
}

export default OrdersList
