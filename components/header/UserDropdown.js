import Link from "next/link"
import styles from "../../styles/header/Header.module.scss"

export default function UserDropdown() {
  return (
    <div className={styles.userDropdown} id="user-dropdown">
      <ul>
        <Link href={"/profile" + "/" + "ali_barani"}>
          <li>Profile</li>
        </Link>
        <li>Stats</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  )
}
