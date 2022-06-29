import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.webp" />        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(          { 
            "@context": "https://schema.org",
            "@type": "Corporation",
            "name": "",
            "name2": "",
            "url": "https://natrol.myshopify.com",
            "logo": "https://cdn.shopify.com/s/files/1/0616/2130/5564/files/header-logo_2.svg?v=7058060604916427305",
            "sameAs": [
            "https://www.facebook.com/natrol",
            "https://twitter.com/natrol",
            "https://www.instagram.com/natrolofficial/?hl=en",
            "https://www.pinterest.com/natrolofficial/",
            "https://www.youtube.com/user/natrolinc/videos"
            ]
          }) }}
        >
        </script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(          
            {
             "@context": "https://schema.org/",
             "@type": "Product",
             "name": "Sleep+ Calm Capsules",
             "image": "https://cdn.shopify.com/s/files/1/0616/2130/5564/products/Natrol-SleepPlus-Calm-Capsules-30ct-Front_320x.png?v=1654659896",
             "description": "Natrol Sleep+ Calm helps calm an active mind and body, and ease you to sleep.†",
             "brand": {
             "@type": "Brand",
             "name": "Natrol"
             },
             "sku": "7914",
             "gtin12": "047469005948",
             "offers": {
             "@type": "Offer",
             "url": "/products/sleep-plus-calm-sleep-support-capsules",
             "priceCurrency": "USD",
             
             "price": "17",
             "availability": "https://schema.org/InStock",
             "itemCondition": "https://schema.org/NewCondition"
             },
             "aggregateRating": {
             "@type": "AggregateRating",
             "ratingValue": "4.1",
             "bestRating": "5",
             "worstRating": "1",
              ratingCount: "26"
             }
            }
            ) }}
        >
        </script>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}