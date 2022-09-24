import TopCard from "../../components/post/TopCard"
import ImageCard from "../../components/post/ImageCard"
import BottomCard from "../../components/post/BottomCard"
import styles from "../../styles/post/Post.module.scss"
import allPosts from "../../PostList.json"

export default function MyPhotos() {
  return (
    <div className={styles.imageGallery}
        style={{margin: "auto", padding: "0px"}}
    >
      {allPosts.length !== 0 && allPosts.map((post) => (
        <div className={styles.card} key={post.id}>
          <TopCard avatar={post.avatar} username={post.username} />
          <ImageCard avatar={post.avatar} username={post.username} img={post.postImg} />
          <BottomCard />
        </div>
      ))}
    </div>
  )
}
