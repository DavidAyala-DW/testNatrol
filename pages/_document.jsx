import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>

        <link
          rel="preload"
          href="../public/Brooklyn-Bold.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />

        <link
          rel="preload"
          href="../public/Brooklyn-Bold.woff"
          as="font"
          crossOrigin=""
          type="font/woff"
        />

        <link
          rel="preload"
          href="../public/Brooklyn-Heavy.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />

        <link
          rel="preload"
          href="../public/Brooklyn-Heavy.woff"
          as="font"
          crossOrigin=""
          type="font/woff"
        />

        <link
          rel="preload"
          href="../public/Brooklyn-Normal.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />

        <link
          rel="preload"
          href="../public/Brooklyn-Normal.woff"
          as="font"
          crossOrigin=""
          type="font/woff"
        />

        <link
          rel="preload"
          href="../public/Brooklyn-SemiBold.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />

        <link
          rel="preload"
          href="../public/Brooklyn-SemiBold.woff"
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