import styles from "../../styles/profile/Profile.module.scss"

export default function Top() {
  return (
    <div className={styles.top}>
      <div className={styles.justify}>
        <p className={styles.username}>ali sattar</p>
      </div>
      <div className={styles.buttons}>
        <div className={styles.btnPrimary}>
          Hire
        </div>
        <div className={styles.customBtn}>
          <svg width="18" height="18" className={styles.icon} viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M23.7 24v2.7H2.3V24c0-3.5 7.1-5.3 10.7-5.3s10.7 1.8 10.7 5.3zM13 16c2.9 0 5.3-2.4 5.3-5.3S15.9 5.3 13 5.3s-5.3 2.4-5.3 5.3S10.1 16 13 16zm14.7-2.7v-4H25v4h-4V16h4v4h2.7v-4h4v-2.7h-4z"></path></svg>
        </div>
        <div className={styles.customBtn}>
          <svg width="18" height="18" className={styles.icon} viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M7.99999 15.9999C7.99999 17.4666 6.79999 18.6666 5.33332 18.6666C3.86666 18.6666 2.66666 17.4666 2.66666 15.9999C2.66666 14.5333 3.86666 13.3333 5.33332 13.3333C6.79999 13.3333 7.99999 14.5333 7.99999 15.9999ZM26.6667 13.3333C25.2 13.3333 24 14.5333 24 15.9999C24 17.4666 25.2 18.6666 26.6667 18.6666C28.1333 18.6666 29.3333 17.4666 29.3333 15.9999C29.3333 14.5333 28.1333 13.3333 26.6667 13.3333ZM16 13.3333C14.5333 13.3333 13.3333 14.5333 13.3333 15.9999C13.3333 17.4666 14.5333 18.6666 16 18.6666C17.4667 18.6666 18.6667 17.4666 18.6667 15.9999C18.6667 14.5333 17.4667 13.3333 16 13.3333Z"></path></svg>
        </div>
      </div>
    </div>
  )
}
