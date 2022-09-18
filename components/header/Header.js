import React from 'react'
import { useSelector } from 'react-redux'
import styles from "../../styles/header/Header.module.scss"
import PhotoModal from '../modal/PhotoModal'
import { Logo } from './Logo'
import { Menu } from './Menu'
import Tag  from "../tag/Tag"

export const Header = () => {

  const show = useSelector((state) => state.modal.showModal)
  
  return (
    <>
      <PhotoModal show={show} />
      <div className={styles.header} id="header">
        <div className={styles.innerContainer}>
          <div style={{
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            width: "100%"
          }}>
            <Logo />
            <Menu />
          </div>
          <Tag />
        </div>
      </div>
    </>
  )
}
