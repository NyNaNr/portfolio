// 最上位のレイアウトはルート レイアウトと呼ばれます。この必須のレイアウトは、アプリケーション内のすべてのページで共有されます。
//ルート レイアウトにhtmlは とbodyタグが含まれている必要があります。
//_app.jsと_document.jsの代わり

import "./globals.css"
import { Inter } from "next/font/google"

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
