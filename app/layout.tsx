// 最上位のレイアウトはルート レイアウトと呼ばれます。この必須のレイアウトは、アプリケーション内のすべてのページで共有されます。
//ルート レイアウトにhtmlは とbodyタグが含まれている必要があります。
//_app.jsと_document.jsの代わり

import "./globals.css"
import { Inter } from "next/font/google"
import Script from "next/script"
import { Suspense } from "react"
import { GA_TRACKING_ID } from "../lib/contant"
import { GoogleAnalyticsScript } from "@/lib/gtag"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Yu's portfolio",
  description: "Where there is a will, there is a way",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
