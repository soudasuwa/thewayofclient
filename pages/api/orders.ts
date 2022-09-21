import { collection, getDocs } from "firebase/firestore/lite"
import { NextApiRequest, NextApiResponse } from "next"
import { db } from "../../config/firebase"

async function getOrders(req: NextApiRequest, res: NextApiResponse) {
  const ordersCol = collection(db, "wooOrders")
  const ordersSnapshot = await getDocs(ordersCol)
  const ordersList = ordersSnapshot.docs.map((doc) => doc.data())

  res.status(200).json(ordersList)
}

export default getOrders
