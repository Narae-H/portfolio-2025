import { MdKeyboardArrowUp } from "react-icons/md";

export default function ScrollToTopButton () {
  return (
    <div className="
      flex
      absolute
      bg-go-to-top-bg
      rounded-[20px]
      bottom-14 right-10
      p-1
      cursor-pointer
      opacity-50
      z-999
      hover:opacity-60
    ">
      <MdKeyboardArrowUp color="#ffffff" size="32px" />
    </div>
  )
}