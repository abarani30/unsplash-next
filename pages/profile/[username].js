import { useState } from "react"
import UserInfo from "../../components/profile/UserInfo"
import NavList from "../../components/profile/Nav.List"
import MyPhotos from "../../components/profile/MyPhotos"
import styles from "../../styles/profile/Profile.module.scss"

export default function Profile() {

  const [active, setActive] = useState(1)

  const activateItem = (itemNumber) => {
    if (itemNumber === 1) setActive(1)
    else if (itemNumber === 2) setActive(2)
    else setActive(3)
  }

  return (
    <div className={styles.wrapper}> 
      <UserInfo />
      <NavList toggle={activateItem} active={active} />
      {active === 1 &&  <MyPhotos />}
      {active === 2 &&  <p>You don't have any liked photos yet!</p>}
      {active === 3 &&  <p>You don't have any collections yet!</p>}
    </div>
  )
}
