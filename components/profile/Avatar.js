import styles from "../../styles/profile/Profile.module.scss"

export default function Avatar() {
  return (
    <div className={styles.imageSection}>
      <img 
        src="https://avatars.githubusercontent.com/u/29902054?v=4" 
        alt="user_avatar" 
        className={styles.avatar} 
      />
    </div>
  )
}
