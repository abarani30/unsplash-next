import styles from "../../styles/post/Post.module.scss"

export default function BottomOverlay({ avatar, username }) {
  return (
    <div className={styles.overlayBottom}>
      <div className={styles.userInfo}>
        <img src={avatar} alt="user_avatar" />
        <p>{username}</p>
      </div>
      <div className={styles.customBtn}>
        <svg width="16" height="16" className={styles.icon} viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path></svg>
      </div>
    </div>
  )
}
