import Head from 'next/head'
import { Header } from '../components/header/Header'
import Post from '../components/post/Post'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Beautiful Free Images & Pictures" />
        <meta property="og:description" content="A place to share an awesome images" />
        <meta property="og:image"
          content="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <meta property="og:url" content="https://abarani30.github.io/unsplash-clone" />
        <title>Beautiful Free Images & Pictures</title>
      </Head>

      <Header />
      <Post />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}