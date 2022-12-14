import React from 'react'
import { Buttons } from "./Buttons"
import styles from "../../styles/header/Header.module.scss"
import { useRouter } from 'next/router'

export const Search = () => {

  const router = useRouter()
  const { locale } = router

  return (
    <div className={locale === "en" ? styles.searchContainer : styles.searchContainerAr}>
      <div className={styles.search}>
        <svg width="18" height="18" className={locale === "en" ? styles.searchIcon : styles.searchIconAr} viewBox="0 0 32 32" version="1.1"
          aria-hidden="false">
          <path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z" />
        </svg>
        <input type="text" placeholder={locale === "en" ? "Search free photos" : "ابحث هنا"} className={locale === "en" ? styles.searchInput : styles.searchInputAr} />
      </div>
      <Buttons />
    </div>
  )
}
