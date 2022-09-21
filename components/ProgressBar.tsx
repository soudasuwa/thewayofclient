import Iterator from "./Iterator"
import ProgressBarSkeleton from "./ProgressBarSkeleton";

import styles from "./styles/ProgressBar.module.css"

const ProgressBar = ({ current, max }: { current?: number; max?: number }) => {
  if (max === undefined) return <ProgressBarSkeleton />

  const colors = Array<string>(max).fill("")

  colors.fill("#81c259", 0, current)

  return (
    <div className={styles.progress}>
      <Iterator array={colors}>
        {(color) => (
          <div
            className={styles.checkpoint}
            style={{ background: color }}
          ></div>
        )}
      </Iterator>
    </div>
  )
}

export default ProgressBar
