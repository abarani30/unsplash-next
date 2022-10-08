import { useRouter } from "next/router"
import styles from "../../styles/profile/Profile.module.scss"

export default function Avatar() {

  const router = useRouter()
  const { locale } = router

  return (
    <div className={locale === "en" ? styles.imageSection : styles.imageSectionAr}>
      <img 
        src="https://avatars.githubusercontent.com/u/29902054?v=4" 
        alt="user_avatar" 
        className={styles.avatar} 
      />
    </div>
  )
}
