import Iterator from "./Iterator"
import styles from "./styles/ProgressBar.module.css"

type Props = {
  steps: number
}

const ProgressBarSkeleton = ({ steps }: Props) => {
  return (
    <div className={styles.progress}>
      <Iterator array={Array(steps).fill(null)}>
        {(_) => <div className={styles.checkpoint}></div>}
      </Iterator>
    </div>
  )
}

ProgressBarSkeleton.defaultProps = {
  steps: 1,
}

export default ProgressBarSkeleton
