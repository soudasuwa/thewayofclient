import React from "react"

const Iterator = <T,>({
  children,
  array,
}: {
  children?: (data?: T) => React.ReactNode
  array?: T[]
}) => {
  if (children === undefined) return <></>
  if (array === undefined) return <>{children()}</>

  return (
    <>
      {array.map((child, key) => (
        <React.Fragment key={key}>{children(child)}</React.Fragment>
      ))}
    </>
  )
}

Iterator.defaultProps = {
  children: undefined,
}

export default Iterator
