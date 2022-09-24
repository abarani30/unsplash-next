import styles from "../../styles/profile/Profile.module.scss"

export default function Extra() {
  return (
    <>
      <p className={styles.bio}>
        A landscape photographer based in the cairngorm mountains of Scotland. 
        Feel free to drop a small donation if you find my photos inspiring or useful!
      </p>
      <div className={styles.afh}>
        <svg width="16" height="16" className={styles.afhIcon} viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M16.3 3C9 3 3 9 3 16.3C3 23.6 9 29.6 16.3 29.6C23.7 29.6 29.6 23.6 29.6 16.3C29.6 9 23.7 3 16.3 3ZM13.8 22.6L8.7 17.5L10.7 15.5L13.8 18.6L21.6 10.8L23.6 12.8L13.8 22.6Z"></path></svg>
        <p>Available for hire</p>
      </div>
      <div className={styles.location}>
        <svg width="17" height="17" className={styles.locIcon}  viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M16 2.66669C9.99998 2.66669 5.33331 7.06669 5.33331 12.6667C5.33331 19.8667 12.9333 27.0667 15.3333 29.0667C15.7333 29.4267 16.2666 29.4267 16.6666 29.0667C19.0666 27.0667 26.6666 19.8667 26.6666 12.6667C26.6666 7.06669 22 2.66669 16 2.66669ZM16 18.6667C13.0666 18.6667 10.6666 16.2667 10.6666 13.3334C10.6666 10.4 13.0666 8.00002 16 8.00002C18.9333 8.00002 21.3333 10.4 21.3333 13.3334C21.3333 16.2667 18.9333 18.6667 16 18.6667Z"></path></svg>
        <p>iraq, baghdad</p>
      </div>
      <div className={styles.connect}>
        <svg width="17" height="17" className={styles.connIcon} viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M13 21l-2-2 8-8 2 2-8 8zm1.1 3.1c-1.7 1.7-4.5 1.7-6.2 0-1.7-1.7-1.7-4.5 0-6.2l4-4L10 12l-4 4c-2.7 2.7-2.7 7.2 0 9.9s7.2 2.7 9.9 0l4-4L18 20l-3.9 4.1zm11.8-18c-2.7-2.7-7.2-2.7-9.9 0l-4 4 1.9 1.9 4-4c1.7-1.7 4.5-1.7 6.2 0 1.7 1.7 1.7 4.5 0 6.2l-4 4L22 20l4-4c2.7-2.7 2.7-7.2-.1-9.9z"></path></svg>
        <p>Connect with ali</p>
      </div>
    </>
  )
}
