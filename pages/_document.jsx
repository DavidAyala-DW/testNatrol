import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.webp" />        
        
        <script type="application/ld+json"> 
      {
{       "@context": "https://schema.org",
       "@type": "Corporation",
       "name": "",
       "url": "https://natrol.myshopify.com",
       "logo": "https://cdn.shopify.com/s/files/1/0616/2130/5564/files/header-logo_2.svg?v=7058060604916427305",
       "sameAs": [
       "https://www.facebook.com/natrol",
       "https://twitter.com/natrol",
       "https://www.instagram.com/natrolofficial/?hl=en",
       "https://www.pinterest.com/natrolofficial/",
       "https://www.youtube.com/user/natrolinc/videos"
       ]}
      }
    </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}