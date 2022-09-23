import { useState } from "react"
import styles from "../../styles/profile/Profile.module.scss"
import allPosts from "../../PostList.json"
import TopCard from "../../components/post/TopCard"
import ImageCard from "../../components/post/ImageCard"
import BottomCard from "../../components/post/BottomCard"
import postStyles from "../../styles/post/Post.module.scss"


export default function Profile() {

  const [active, setActive] = useState(1)

  const activateItem = (itemNumber) => {
    if (itemNumber === 1) setActive(1)
    else if (itemNumber === 2) setActive(2)
    else setActive(3)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.userInfo}>
        <div className={styles.imageSection}>
          <img 
            src="https://avatars.githubusercontent.com/u/29902054?v=4" 
            alt="user_avatar" 
            className={styles.avatar} 
          />
        </div>
        <div className={styles.basicInfo}>
          
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
          <div className={styles.interests}>
            Interests
            <ul className={styles.tags}>
              <li>nature</li>
              <li>football</li>
              <li>music</li>
              <li>reading</li>
              <li>coding</li>
            </ul>
          </div>

        </div>
      </div>
      <ul className={styles.linkList}>
        <li onClick={() => activateItem(1)} className={active === 1 ? styles.active: undefined}>
          <svg width="17" height="17" className={styles.icon} viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M26.7 4H5.3C4.5 4 4 4.5 4 5.3v21.3c0 .9.5 1.4 1.3 1.4h21.3c.8 0 1.3-.5 1.3-1.3V5.3c.1-.8-.4-1.3-1.2-1.3zm-20 20l4.7-6 3.3 4 4.7-6 6 8H6.7z"></path></svg>
          Photos
          <label>19</label>
        </li>
        <li onClick={() => activateItem(2)} className={active === 2 ? styles.active : undefined}>
          <svg width="17" height="17" className={styles.icon} viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M28.6 16.6L16 29.3 3.5 16.6c-2.8-3-2.9-7.7 0-10.5s7.6-2.8 10.4 0L16 8.3l2.1-2.2c2.9-2.8 7.6-2.8 10.4 0 2.9 3 2.9 7.6.1 10.5z"></path></svg>
          Likes
          <label>0</label>
        </li>
        <li onClick={() => activateItem(3)} className={active === 3 ? styles.active : undefined}>
          <svg width="17" height="17" className={styles.icon} viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M1.85543 9.96868C6.21534 11.9994 10.6257 14.0483 15.0039 16.0607c.3098.1714.6581.2613 1.0122.2613.3541 0 .7024-.0899 1.0121-.2613 4.3599-1.9941 8.7565-4.0613 13.0797-6.07373.2473-.11892.5588-.18294.5588-.5031 0-.32015-.3115-.41162-.5588-.52139-4.3232-2.02154-8.7748-4.11625-13.1163-6.12864-.6093-.21642-1.2736-.22286-1.8869-.0183-4.3966 2.03069-8.88936 4.1254-13.26759 6.17438-.21067.10062-.50378.18295-.50378.47566s.29311.40248.5221.5031zm17.43517.65862V6.84032l7.41 2.10387-10.68 4.96691V9.58449l3.27 1.04281zM27.8501 20.8539c-.327-.158-.6856-.24-1.0488-.24-.3632 0-.7218.082-1.0488.24l-8.6832 4.0613c-.3326.1666-.6995.2534-1.0716.2534-.3721 0-.7391-.0868-1.0717-.2534l-8.71066-4.0247c-.33699-.1628-.70648-.2474-1.08082-.2474-.37434 0-.74383.0846-1.08082.2474-.71444.3476-1.4472.686-2.1708 1.0245-.23814.1189-.54957.1829-.54957.5031 0 .3201.31143.4116.54041.5213.22899.1098 12.78016 5.9501 13.09806 6.1012.3179.1511.6764.25 1.0259.2927.3788-.0358.7281-.1478 1.0625-.3293.3343-.1814 13.374-6.2655 13.4278-6.2932.0538-.0277.099-.0697.1305-.1213.0315-.0517.0482-.111.0482-.1714 0-.0605-.0167-.1198-.0482-.1715-.0315-.0516-.0767-.0936-.1305-.1213-.0538-.0277-2.3109-1.1135-2.6379-1.2714z"></path><path d="M27.8501 14.46c-.327-.158-.6856-.24-1.0488-.24-.3632 0-.7218.082-1.0488.24l-8.6832 4.0613c-.3326.1666-.6995.2533-1.0716.2533-.3721 0-.7391-.0867-1.0717-.2533l-8.71066-4.0247c-.33699-.1628-.70648-.2474-1.08082-.2474-.37434 0-.74383.0846-1.08082.2474-.71444.3476-1.4472.686-2.1708 1.0244-.23815.119-.54957.183-.54957.5031 0 .3202.31142.4117.54041.5214.22899.1098 12.78016 5.9501 13.09806 6.1012.3179.1511.6764.25 1.0259.2927.3788-.0358.7281-.1478 1.0625-.3293.3343-.1814 13.374-6.2655 13.4278-6.2932.0538-.0277.099-.0697.1305-.1213.0315-.0517.0482-.111.0482-.1715 0-.0604-.0167-.1197-.0482-.1714-.0315-.0516-.0767-.0936-.1305-.1213-.0538-.0277-2.3109-1.1135-2.6379-1.2714z"></path></svg>
          Collections
          <label>0</label>
        </li>
      </ul>

      <div className={postStyles.imageGallery}
        style={{margin: "auto", padding: "0px"}}
        >
        {allPosts.length !== 0 && active === 1 ? allPosts.map((post) => (
          <div className={postStyles.card} key={post.id}>
            <TopCard avatar={post.avatar} username={post.username} />
            <ImageCard avatar={post.avatar} username={post.username} img={post.postImg} />
            <BottomCard />
          </div>
        )): 
        ""}
      </div>

    </div>
  )
}
