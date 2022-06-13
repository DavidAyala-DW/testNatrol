import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>

        <link
          rel="preload"
          href="/Brooklyn-Bold.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />

        <link
          rel="preload"
          href="/Brooklyn-Bold.woff"
          as="font"
          crossOrigin=""
          type="font/woff"
        />

        <link
          rel="preload"
          href="/Brooklyn-Heavy.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />

        <link
          rel="preload"
          href="/Brooklyn-Heavy.woff"
          as="font"
          crossOrigin=""
          type="font/woff"
        />

        <link
          rel="preload"
          href="/Brooklyn-Normal.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />

        <link
          rel="preload"
          href="/Brooklyn-Normal.woff"
          as="font"
          crossOrigin=""
          type="font/woff"
        />

        <link
          rel="preload"
          href="/Brooklyn-SemiBold.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />

        <link
          rel="preload"
          href="/Brooklyn-SemiBold.woff"
          as="font"
          crossOrigin=""
          type="font/woff"
        />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}