import React from 'react'
import Avatar from './Avatar'
import BasicInfo from './BasicInfo'
import styles from "../../styles/profile/Profile.module.scss"

export default function UserInfo() {
  return (
    <div className={styles.userInfo}>
      <Avatar />
      <BasicInfo />
    </div>
  )
}
