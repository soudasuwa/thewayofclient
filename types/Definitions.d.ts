declare module Definitions {
  export interface Expiry {
    seconds: number
    nanoseconds: number
  }

  export interface Billing {
    firstName: string
    lastName: string
    email: string
    expiry: Expiry
  }

  export interface LineItem {
    type: string
    productId: number
    name: string
    quantity: number
  }

  export type OrderStatus = "completed"

  export interface Order {
    orderTotal: string
    orderId: number
    billing: Billing
    lineItems: LineItem[]
    wordpressUserId: number
    orderStatus: OrderStatus
    items: number[]
  }
}
