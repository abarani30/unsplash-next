import { useEffect} from 'react';
import styles from "../../styles/post/Post.module.scss"
import { AiFillHeart, AiOutlineArrowDown, AiOutlineHeart, AiOutlineLink } from "react-icons/ai"
import allPosts from "../../PostList.json"
import Skeleton from "./Skeleton"
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../app/features/slices/postSlice';


export default function Post() {

  const dispatch = useDispatch()
  const { isLoading, posts } = useSelector((state) => state.post)

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  if (isLoading || posts.length === 0) return <Skeleton />

  return (
    <div className={styles.imageGallery}>
      {allPosts.length !== 0 ? allPosts.map((post) => (
        <div className={styles.card} key={post.id}>
          <div className={styles.top}>
            <div className={styles.userInfo}>
              <img src={post.avatar} alt="user_avatar" />
              <p>{post.username}</p>
            </div>
          </div>
          <div className={styles.imageBox}>
            <img
              src={post.postImg}
              alt="post_image" />
            <div className={styles.overlay}>
              <div className={styles.overlayTop}>
                <div className={styles.buttons}>
                  <div className={styles.customBtn}>
                    <svg width="16" height="16" className={styles.icon} viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"></path></svg>
                  </div>
                  <div className={styles.customBtn}>
                    <svg width="16" height="16" className={styles.icon} viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M14 3h4v26h-4zM29 14v4h-26v-4z"></path></svg>
                  </div>
                </div>
              </div>
              <div className={styles.overlayBottom}>
                <div className={styles.userInfo}>
                  <img src={post.avatar} alt="user_avatar" />
                  <p>{post.username}</p>
                </div>
                <div className={styles.customBtn}>
                  <svg width="16" height="16" class={styles.icon} viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path></svg>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.justify}>
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
        </div>
       )): 
       (<div className={styles.noPosts}>
          <p>There is no posts yet 😑</p>
        </div>
       )}
    </div>
  )
}
