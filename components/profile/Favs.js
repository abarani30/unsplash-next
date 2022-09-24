import styles from "../../styles/profile/Profile.module.scss"

export default function Favs() {
  return (
    <div className={styles.interests}>
      Interests
      <ul className={styles.tags}>
        <li>nature</li>
        <li>football</li>
        <li>music</li>
        <li>reading</li>
        <li>coding</li>
      </ul>
    </div>
  )
}
