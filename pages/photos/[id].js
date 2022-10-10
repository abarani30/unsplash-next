import styles from "../../styles/post/PostDetails.module.scss"
import { FiMaximize2, FiMinimize2 } from "react-icons/fi"
import Link from "next/link"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { useRouter } from "next/router";

export default function PostDetails() {

  const { t } = useTranslation("")
  const [expand, setExpand] = useState(false)
  const router = useRouter()
  const { locale } = router

  function expandImage() {
    setExpand(true)
  }

  function shrinkImage() {
    setExpand(false)
  }

  return (
    <div className={styles.viewPost}>
      <div className={styles.innerPost}>
        <div className={styles.postContent}>

          <div className={styles.top}>
            <div className={styles.userInfo}>
              <img src="https://avatars.githubusercontent.com/u/29902054?v=4" alt="my_name" className={locale === "en" ? styles.avatar : styles.avatarAr} />
              <p>Ali Sattar</p>
            </div>
            <div className={styles.right}>
              <div className={styles.justify}>
                <div className={styles.customBtn}>
                  <svg width="16" height="16" className={styles.icon} viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"></path></svg>
                </div>
                <div className={styles.customBtn}>
                  <svg width="16" height="16" className={styles.icon} viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M14 3h4v26h-4zM29 14v4h-26v-4z"></path></svg>
                </div>
              </div>
              <button className={styles.downloadBtn}>{t("photo.download")}</button>
            </div>
          </div>

          <div className={styles.middle}>
            <div className={expand ? styles.expandDiv : styles.shrinkDiv}>
              {
                expand 
                ? 
                <FiMinimize2 size={20} className={styles.shrinkIcon} onClick={shrinkImage} /> 
                :
                <FiMaximize2 size={20} className={styles.expandIcon} onClick={expandImage} />
              }
              <img
                src="https://images.unsplash.com/photo-1661151488777-01eb94455b7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                className={styles.userPhoto} alt="user-photo" />
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.left}>
              <div className={styles.viewers}>
                <p>{t("photo.views")}</p>
                <label>1350</label>
              </div>
              <div className={styles.downloads}>
                <p>{t("photo.downloads")}</p>
                <label>1000</label>
              </div>
            </div>
            <div className={styles.right}>
              <button className={styles.downloadBtn}>{t("photo.share")}</button>
              <button className={styles.downloadBtn}>{t("photo.report")}</button>
              <Link href={"/"}>
                <button className={styles.downloadBtn}>{t("photo.back")}</button>
              </Link>
            </div>
          </div>

          <div className={styles.extra}>
            <div className={styles.location}>
              <svg width="16" height="16" viewBox="0 0 32 32" version="1.1" aria-hidden="false">
                <path
                  d="M16 2.66669C9.99998 2.66669 5.33331 7.06669 5.33331 12.6667C5.33331 19.8667 12.9333 27.0667 15.3333 29.0667C15.7333 29.4267 16.2666 29.4267 16.6666 29.0667C19.0666 27.0667 26.6666 19.8667 26.6666 12.6667C26.6666 7.06669 22 2.66669 16 2.66669ZM16 18.6667C13.0666 18.6667 10.6666 16.2667 10.6666 13.3334C10.6666 10.4 13.0666 8.00002 16 8.00002C18.9333 8.00002 21.3333 10.4 21.3333 13.3334C21.3333 16.2667 18.9333 18.6667 16 18.6667Z">
                </path>
              </svg>
              <a href="#">Iraq, Baghdad</a>
            </div>
            <div className={styles.published}>
              <svg width="16" height="16" viewBox="0 0 24 24" version="1.1" aria-hidden="false">
                <path
                  d="M21 6v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14z">
                </path>
              </svg>
              <p href="#">{t("photo.publishedOn")} 2022-09-01</p>
            </div>
            <div className={styles.license}>
              <svg width="16" height="16" viewBox="0 0 32 32" version="1.1" aria-hidden="false">
                <path
                  d="M13.3333 18.9333l8.8-8.8L24 12 13.3333 22.6667 8 17.3333l1.86667-1.8666 3.46663 3.4666zM28 6.66668v8.00002c0 7.3333-5.0667 14.2666-12 16-6.93333-1.7334-12-8.6667-12-16V6.66668l12-5.33334 12 5.33334zm-2.6667 1.73333L16 4.26668 6.66667 8.40001v6.26669c0 6 4.00003 11.6 9.33333 13.2 5.3333-1.6 9.3333-7.2 9.3333-13.2V8.40001z">
                </path>
              </svg>
              <p href="#">{t("photo.freeToUse")} <a href="#">Unsplash License</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
      ...(await serverSideTranslations(locale, ['common']))
  }
});