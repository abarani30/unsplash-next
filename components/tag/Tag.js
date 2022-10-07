import { useRouter } from "next/router"
import styles from "../../styles/header/Header.module.scss"

export default function Tag() {

  const router = useRouter()
  const { locale } = router

  return (
    <div className={styles.tagsWrapper}>
      <div className={styles.allTags}>
        <ul>
          <li className={locale === "en" ? styles.tag : styles.tagAr}>nature</li>
          <li className={locale === "en" ? styles.tag : styles.tagAr}>forrest</li>
          <li className={locale === "en" ? styles.tag : styles.tagAr}>recipes</li>
          <li className={locale === "en" ? styles.tag : styles.tagAr}>train</li>
          <li className={locale === "en" ? styles.tag : styles.tagAr}>coding</li>
          <li className={locale === "en" ? styles.tag : styles.tagAr}>nature</li>
          <li className={locale === "en" ? styles.tag : styles.tagAr}>forrest</li>
          <li className={locale === "en" ? styles.tag : styles.tagAr}>recipes</li>
          <li className={locale === "en" ? styles.tag : styles.tagAr}>train</li>
          <li className={locale === "en" ? styles.tag : styles.tagAr}>coding</li>
          <li className={locale === "en" ? styles.tag : styles.tagAr}>nature</li>
          <li className={locale === "en" ? styles.tag : styles.tagAr}>forrest</li>
          <li className={locale === "en" ? styles.tag : styles.tagAr}>recipes</li>
          <li className={locale === "en" ? styles.tag : styles.tagAr}>train</li>
          <li className={locale === "en" ? styles.tag : styles.tagAr}>coding</li>
          <li className={locale === "en" ? styles.tag : styles.tagAr}>nature</li>
          <li className={locale === "en" ? styles.tag : styles.tagAr}>forrest</li>
          <li className={locale === "en" ? styles.tag : styles.tagAr}>recipes</li>
          <li className={locale === "en" ? styles.tag : styles.tagAr}>train</li>
          <li className={locale === "en" ? styles.tag : styles.tagAr}>coding</li>
        </ul>
      </div>
    </div> 
  )
}
