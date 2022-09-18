import styles from "../../styles/header/Header.module.scss"
import { FiMenu } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { toggle } from "../../app/features/slices/modalSlice"

export const Menu = () => {

  const dispatch = useDispatch()


  const toggleModal = () => {
    dispatch(toggle())
    window.document.body.style.overflowY = "hidden"
    window.document.getElementById("menu-dropdown").style.display = "none"
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
          <img src="https://avatars.githubusercontent.com/u/29902054?v=4" className={styles.userAvatar} />
          <span  className={styles.menuIcon} id="menu-icon">
            <FiMenu size={20} />
          </span>
        </div>
        <div className={styles.dropdown} id="menu-dropdown">
          <ul>
            <li>About Me</li>
            <li>Dev. API</li>
            <li>Favs</li>
            <li>Explore</li>
            <li>Contact Us</li>
            <li>Log in</li>
            <li>
              <button className={styles.submitPhoto} onClick={toggleModal} id="submit-mobile">
                Submit a photo
              </button>
            </li>
          </ul>
        </div>
      </li>
  </ul>
  )
}
