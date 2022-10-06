import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import styles from "../../styles/header/Header.module.scss"

export default function MenuDropdown({ toggle }) {

  const router = useRouter()
  const { locale } = router
  const { t } = useTranslation("")

  return (
    <div className={locale === "en" ? styles.dropdown : styles.dropdownAr} id="menu-dropdown">
      <ul>
        <li>{t("home.aboutMe")}</li>
        <li>{t("home.devAPI")}</li>
        <li>{t("home.favs")}</li>
        <li>{t("home.explore")}</li>
        <li>{t("home.contactUs")}</li>
        <li>{t("home.login")}</li>
        <li>
          <button className={styles.submitPhoto} onClick={() => toggle()} id="submit-mobile">
            {t("home.submitPhoto")}
          </button>
        </li>
      </ul>
    </div>
  )
}
