import styles from "../../styles/header/Header.module.scss"
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export const Buttons = () => {

  const router = useRouter()
  const { locale } = router

  const { t } = useTranslation()

  return (
    <>
      <button className={styles.login}>{t("home.explore")}</button>
      <button className={locale === "en" ? styles.vl : styles.vlAr}></button>
      <button className={styles.login}>{t("home.favs")}</button>
    </>
  )
}
