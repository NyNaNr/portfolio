import { useEffect } from "react"
import { useRouter } from "next/router"

function ScrollToTop() {
  const { asPath } = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [asPath])

  return null
}

export default ScrollToTop
// useRouter から asPath を取得しています。asPath は現在のURLパスを表し、クエリパラメータやハッシュを含みます。そのため、 asPath が変更されるたびに（つまり新しいページにナビゲートするたびに） useEffect のコールバックが呼び出され、ページの先頭にスクロールします。
// 使えるかも
