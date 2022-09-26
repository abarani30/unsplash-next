import { useState } from "react"
import styles from "../../styles/header/Header.module.scss"
import { FiMenu } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { toggle } from "../../app/features/slices/modalSlice"
import UserDropdown from "./UserDropdown"
import MenuDropdown from "./MenuDropdown"
import { MdLanguage } from "react-icons/md"
import Link from "next/link"
import { useRouter } from "next/router"

export const Menu = () => {

  const dispatch  = useDispatch()
  const router    = useRouter() 
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

  return (
    <ul className={styles.menu}>
      <li><button className={styles.login}>Log in</button></li>
      <li>
        <button className={styles.submitPhoto} onClick={toggleModal} id="submit">
        Submit a photo
        </button>
      </li>
      <li>
        <div className={styles.justify}>
          <MdLanguage size="21" 
            className={styles.language}  
            onClick={() => router.push('/ar')}
          />
          <img src="https://avatars.githubusercontent.com/u/29902054?v=4" className={styles.userAvatar} onClick={toggleUserDropdown} alt="user_avatar" />
          <span  className={styles.menuIcon} id="menu-icon" onClick={toggleMenuDropdown}>
            <FiMenu size={20} />
          </span>
        </div>
        {menuDropdown && <MenuDropdown toggle={toggleModal} />}
        {userDropdown && <UserDropdown />}
      </li>
  </ul>
  )
}
