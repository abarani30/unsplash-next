import styles from "../../styles/post/Post.module.scss"
import TopOverlay from './TopOverlay'
import BottomOverlay from "./BottomOverlay"

export default function Overlay({ avatar, username }) {
  return (
    <div className={styles.overlay}>
      <TopOverlay />
      <BottomOverlay avatar={avatar} username={username} />
    </div>
  )
}
