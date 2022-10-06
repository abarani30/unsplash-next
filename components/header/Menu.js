import { useEffect, useState } from "react"
import styles from "../../styles/header/Header.module.scss"
import { FiMenu } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { toggle } from "../../app/features/slices/modalSlice"
import UserDropdown from "./UserDropdown"
import MenuDropdown from "./MenuDropdown"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next";
import LocalSwitcher from "../LocalSwitcher"

export const Menu = () => {

  const dispatch  = useDispatch()
  const router    = useRouter() 
  const { t }     = useTranslation("");

  const [menuDropdown, showMenuDropdown] = useState(false)
  const [userDropdown, showUserDropdown] = useState(false)

  const toggleModal = () => {
    dispatch(toggle())
    window.document.body.style.overflowY = "hidden"
    showMenuDropdown(false)
    showUserDropdown(false)
  }

  const toggleUserDropdown = () => {
    showUserDropdown(!userDropdown)
    showMenuDropdown(false)
  }
  
  const toggleMenuDropdown = () => {
    showMenuDropdown(!menuDropdown)
    showUserDropdown(false)
  }

  const { locale } = router

  useEffect(() => {
    let dir   = locale == "ar" ? "rtl" : "ltr";
    let lang  = locale == "ar" ? "ar" : "en";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [locale]);

  return (
    <ul className={styles.menu}>
      <li><button className={locale === "en" ? styles.login : styles.loginAr}>{t("home.login")}</button></li>
      <li>
        <button className={styles.submitPhoto} onClick={toggleModal} id="submit">
          {t("home.submitPhoto")}
        </button>
      </li>
      <li>
        <div className={styles.justify}>
          <LocalSwitcher />
          <img src="https://avatars.githubusercontent.com/u/29902054?v=4" className={styles.userAvatar} onClick={toggleUserDropdown} alt="user_avatar" />
          <span  className={locale === "en" ? styles.menuIcon : styles.menuIconAr} id="menu-icon" onClick={toggleMenuDropdown}>
            <FiMenu size={20} />
          </span>
        </div>
        {menuDropdown && <MenuDropdown toggle={toggleModal} />}
        {userDropdown && <UserDropdown />}
      </li>
  </ul>
  )
}
