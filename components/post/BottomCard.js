import Link from 'next/link';
import styles from "../../styles/post/Post.module.scss"

export default function BottomCard() {
  return (
    <div className={styles.bottom}>
      <div className={styles.justify}>
        <Link href={"/photos/" + 1}>
          <div className={styles.customBtn}>
            <svg width="18" height="18" fill="currentColor" className={styles.icon} viewBox="0 0 16 16"> <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/> <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/> </svg>
          </div>
        </Link>
        <div className={styles.customBtn}>
          <svg width="16" height="16" className={styles.icon} viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"></path></svg>
        </div>
        <div className={styles.customBtn}>
          <svg width="16" height="16" className={styles.icon} viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M14 3h4v26h-4zM29 14v4h-26v-4z"></path></svg>
        </div>
      </div>
      <div className={styles.customBtn}>
        Download
      </div>
    </div>
  )
}
