import { useTranslation } from "next-i18next"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../../styles/header/Header.module.scss"

export default function UserDropdown() {

  const router = useRouter()
  const { locale } = router
  const { t } = useTranslation("")

  return (
    <div className={locale === "en" ? styles.userDropdown : styles.userDropdownAr} id="user-dropdown">
      <ul>
        <Link href={"/profile" + "/" + "ali_barani"}>
          <li>{t("home.profile")}</li>
        </Link>
        <li>{t("home.stats")}</li>
        <li>{t("home.settings")}</li>
        <li>{t("home.logout")}</li>
      </ul>
    </div>
  )
}
