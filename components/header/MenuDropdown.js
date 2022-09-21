import styles from "../../styles/header/Header.module.scss"

export default function MenuDropdown({ hide, toggle }) {

  return (
    <div className={styles.dropdown} id="menu-dropdown" onMouseLeave={() => hide()}>
      <ul>
        <li>About Me</li>
        <li>Dev. API</li>
        <li>Favs</li>
        <li>Explore</li>
        <li>Contact Us</li>
        <li>Log in</li>
        <li>
          <button className={styles.submitPhoto} onClick={() => toggle()} id="submit-mobile">
            Submit a photo
          </button>
        </li>
      </ul>
    </div>
  )
}
