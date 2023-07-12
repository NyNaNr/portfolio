type MobileMenuButtonProps = {
  handleMenuOpen: () => void
  isOpenMenu: boolean
}

export default function MobileMenuButton({
  handleMenuOpen,
  isOpenMenu,
}: MobileMenuButtonProps) {
  return (
    <>
      <div className="mr-safe">
        <button
          onClick={handleMenuOpen}
          type="button"
          className={`flex justify-center items-center flex-col z-50 w-12 h-12
            hover:active:bg-gray-300 hover:active:bg-opacity-25
              ${isOpenMenu ? "space-y-1" : "space-y-2"}`}
        >
          <div
            className={
              isOpenMenu
                ? "w-8 h-0.5 bg-gray-600 dark:bg-gray-50 translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
                : "w-8 h-0.5 bg-gray-600 dark:bg-gray-50 transition duration-500 ease-in-out backdrop-invert sm:filter-none"
            }
          />
          <div
            className={
              isOpenMenu
                ? "opacity-0 transition duration-500 ease-in-out"
                : "w-8 h-0.5 bg-gray-600 dark:bg-gray-50 transition duration-500 ease-in-out backdrop-invert sm:filter-none"
            }
          />
          <div
            className={
              isOpenMenu
                ? "w-8 h-0.5 bg-gray-600 dark:bg-gray-50 -rotate-45 transition duration-500 ease-in-out"
                : "w-8 h-0.5 bg-gray-600 dark:bg-gray-50 transition duration-500 ease-in-out backdrop-invert sm:filter-none"
            }
          />
        </button>
      </div>
    </>
  )
}
