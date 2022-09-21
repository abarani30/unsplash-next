import { useEffect} from 'react';
import styles from "../../styles/post/Post.module.scss"
import allPosts from "../../PostList.json"
import Skeleton from "./Skeleton"
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../app/features/slices/postSlice';
import TopCard from './TopCard';
import BottomCard from './BottomCard';
import ImageCard from './ImageCard';


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
          <TopCard avatar={post.avatar} username={post.username} />
          <ImageCard avatar={post.avatar} username={post.username} img={post.postImg} />
          <BottomCard />
        </div>
       )): 
       (<div className={styles.noPosts}>
          <p>There is no posts yet 😑</p>
        </div>
       )}
    </div>
  )
}
