import { useTranslation } from "next-i18next"
import styles from "../../styles/profile/Profile.module.scss"

export default function Favs() {

  const { t } = useTranslation("")

  return (
    <div className={styles.interests}>
      {t("profile.interests")}
      <ul className={styles.tags}>
        <li>nature</li>
        <li>football</li>
        <li>music</li>
        <li>reading</li>
        <li>coding</li>
      </ul>
    </div>
  )
}
