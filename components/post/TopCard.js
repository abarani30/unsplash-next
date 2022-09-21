import styles from "../../styles/post/Post.module.scss"

export default function TopCard({ avatar, username }) {
  return (
    <div className={styles.top}>
      <div className={styles.userInfo}>
        <img src={avatar} alt="user_avatar" />
        <p>{username}</p>
      </div>
    </div>
  )
}
