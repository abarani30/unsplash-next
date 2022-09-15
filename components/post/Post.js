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
          <div className={styles.top}>ali sarrar</div>
          <div className={styles.imageBox}>
            <img
              src={post.postImg}
              alt="post_image" />
            <div className={styles.overlay}>
              <div className={styles.overlayTop}>
                <div className={styles.buttons}>
                  <div className={styles.customBtn}>1</div>
                  <div className={styles.customBtn}>2</div>
                </div>
              </div>
              <div className={styles.overlayBottom}>
                <div className={styles.userInfo}>
                  <img src={post.avatar} alt="user_avatar" />
                  <p>{post.username}</p>
                </div>
                <div className={styles.customBtn}>1</div>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>ali sarrar</div>
        </div>
       )): 
       (<div className={styles.noPosts}>
          <p>There is no posts yet 😑</p>
        </div>
       )}
    </div>
  )
}
