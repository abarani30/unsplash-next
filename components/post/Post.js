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
     <div className={styles.gridContainer}>
      <div className={styles.caresoul}>
       {allPosts.length !== 0 ? allPosts.map((post) => (
        <div className={styles.card} key={post.id}>
        <div className={styles.favDiv}>
          <span className={styles.likeIcon}>
            {post.liked ? <AiOutlineHeart size={17} /> : <AiFillHeart size={17} />}
          </span>
        </div>
        <p className={styles.noOfLikes}>
          {post.noOfLikes}
        </p>
        <div className={styles.linkDiv}>
          <span className={styles.linkIcon}>
            <AiOutlineLink size={17} />
          </span>
        </div>
        <div className={styles.userInfo}>
          <img src={post.avatar} alt="user_avatar" className={styles.avatar} />
          <p>{post.username}</p>
        </div>
        <div className={styles.downloadDiv}>
          <span className={styles.downloadIcon}>
            <AiOutlineArrowDown size={17} />
          </span>
        </div>
        <img src={post.postImg} alt="post_img" />
        <p className={styles.imageTags}>
          {post.tags.map((tag, index) => 
            (index <= 1) && <span key={index} className={styles.tagName}>{tag.name}</span>
          )}
          <a href="!#">{post.tags.length - 2} more</a>
        </p>
      </div>
       )) : 
       (<div className={styles.noPosts}>
          <p>There is no posts yet 😑</p>
        </div>
       )}
      </div>
    </div>
  )
}
