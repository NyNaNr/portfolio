// 最上位のレイアウトはルート レイアウトと呼ばれます。この必須のレイアウトは、アプリケーション内のすべてのページで共有されます。
//ルート レイアウトにhtmlは とbodyタグが含まれている必要があります。
//_app.jsと_document.jsの代わり

import "./globals.css"
import { Inter } from "next/font/google"
import Script from "next/script"
import { Suspense } from "react"
import { GA_TRACKING_ID } from "../lib/contant"
import { GoogleAnalyticsScript } from "@/lib/gtag"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Yu's portfolio",
  description:
    "エンジニアYuのポートフォリオサイトです。私がこれまでに手がけた制作物、身につけたスキルをまとめています。",
  openGraph: {
    title: "Yu's portfolio",
    description:
      "エンジニアYuのポートフォリオサイトです。私がこれまでに手がけた制作物、身につけたスキルをまとめています。",
    url: "https://yur-portfolio.vercel.app/",
    siteName: "Yu's portfolio",
    images: [
      {
        url: "/og/YuPortfolio800600.png",
        width: 800,
        height: 600,
      },
      {
        url: "og/YuPortfolio18001600.png",
        width: 1800,
        height: 1600,
      },
    ],
    locale: "ja_JP.UTF-8 ",
    type: "website",
  },
  viewport:
    "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,viewport-fit=cover",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        {/* google search console */}
        <meta
          name="google-site-verification"
          content="9egKRDBY78wzxWE3GjSqBkjZ-xw480zb4PVogFGOhn0"
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
        <Script
          id="gtag-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
        <Suspense fallback={null}>
          <GoogleAnalyticsScript />
        </Suspense>
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
