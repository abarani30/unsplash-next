import { Html, Head, Main, NextScript } from 'next/document'

async function getInitialProps (ctx) {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps, locale: ctx?.locale || "en" };
}


export default function Document({locale}) {
  return (
    <Html  
      dir={locale === "ar" ? "rtl" : "ltr"}
      lang={locale}
      >
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="https://unsplash.com/favicon-32x32.png" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
        {/* <Script src="js/main.js" strategy="lazyOnload" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}