import Overlay from './Overlay'
import styles from "../../styles/post/Post.module.scss"

export default function ImageCard({ avatar, img, username }) {
  return (
    <div className={styles.imageBox}>
      <img src={img} alt="post_image" />
      <Overlay avatar={avatar} username={username} />
    </div>
  )
}
