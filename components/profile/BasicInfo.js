import Top from "./Top"
import Extra from "./Extra"
import styles from "../../styles/profile/Profile.module.scss"
import Favs from "./Favs"

export default function BasicInfo() {
  return (
    <div className={styles.basicInfo}>
      <Top />  
      <Extra />
      <Favs />
    </div>
  )
}
