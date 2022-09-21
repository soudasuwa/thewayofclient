import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import OrdersList from "../components/OrdersList"
import styles from "../styles/Home.module.css"

const Orders: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Orders</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Link href="/">Home</Link>
        <OrdersList />
      </div>
    </div>
  )
}

export default Orders
