export const isMobile = () => {
  if (typeof window !== "undefined") {
    const windowSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
    //画面サイズの篩 タッチ操作の有無は問わない。
    const sizeOfEasyToSeeSideNavbar: number = 696
    if (
      windowSize.width <= sizeOfEasyToSeeSideNavbar ||
      windowSize.height <= sizeOfEasyToSeeSideNavbar
    ) {
      return true
    } else {
      return false
    }
  }
  // SSR時は常にfalse
  return false
}
