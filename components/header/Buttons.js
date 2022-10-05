import styles from "../../styles/header/Header.module.scss"
import { useTranslation } from "next-i18next";

export const Buttons = () => {

  const { t } = useTranslation()

  return (
    <>
      <button className={styles.login}>{t("home.explore")}</button>
      <button className={styles.vl}></button>
      <button className={styles.login}>{t("home.favs")}</button>
    </>
  )
}
