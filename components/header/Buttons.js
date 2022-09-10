import styles from "../../styles/header/Header.module.scss"

export const Buttons = () => {
  return (
    <>
      <button className={styles.login}>Explore</button>
      <button className={styles.vl}></button>
      <button className={styles.login}>Favs</button>
    </>
  )
}
