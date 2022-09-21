import styles from "../../styles/header/Header.module.scss"

export default function UserDropdown({ hide }) {
  return (
    <div className={styles.userDropdown} id="user-dropdown" onMouseLeave={() => hide()}>
      <ul>
        <li>Profile</li>
        <li>Stats</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  )
}
