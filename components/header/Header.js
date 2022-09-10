import React from 'react'
import { useSelector } from 'react-redux'
import styles from "../../styles/header/Header.module.scss"
import PhotoModal from '../modal/PhotoModal'
import { Logo } from './Logo'
import { Menu } from './Menu'

export const Header = () => {

  const show = useSelector((state) => state.modal.showModal)
  
  return (
    <div className={styles.headerShadow} id="top">
      <PhotoModal show={show} />
      <div className={styles.wrapperContainer}>
        <div className={styles.header}>
          <div className={styles.innerContainer}>
            <Logo />
            <Menu />
          </div>
        </div>
      </div>
    </div>
  )
}
