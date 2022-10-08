import { useState } from "react"
import UserInfo from "../../components/profile/UserInfo"
import NavList from "../../components/profile/Nav.List"
import MyPhotos from "../../components/profile/MyPhotos"
import styles from "../../styles/profile/Profile.module.scss"
import Head from "next/head"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Profile() {

  const [active, setActive] = useState(1)

  const activateItem = (itemNumber) => {
    if (itemNumber === 1) setActive(1)
    else if (itemNumber === 2) setActive(2)
    else setActive(3)
  }

  return (
    <>
      <Head>
        <title>ali sattar | Unsplash</title>
      </Head>
      <div className={styles.wrapper}> 
        <UserInfo />
        <NavList toggle={activateItem} active={active} />
        {active === 1 &&  <MyPhotos />}
        {active === 2 &&  <img src="https://unsplash.com/a/img/empty-states/photos.png" className={styles.noPhoto} alt="No photos yet!" />}
        {active === 3 &&  <img src="https://unsplash.com/a/img/empty-states/photos.png" className={styles.noPhoto} alt="No collections yet!" />}
      </div>
    </>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
      ...(await serverSideTranslations(locale, ['common']))
  }
});