import { MdKeyboardArrowUp } from "react-icons/md";

type Props = {
  onClick: () => void;
  className?: string;
}

export default function ScrollToTopButton ({ onClick, className = "fixed bottom-14 right-10" }: Props) {
  return (
    <div
      onClick={onClick}
      className={`
        flex
        bg-go-to-top-bg
        rounded-[20px]
        p-1
        cursor-pointer
        opacity-50
        z-999
        hover:opacity-60
        ${className}
      `}
    >
      <MdKeyboardArrowUp color="#ffffff" size="32px" />
    </div>
  )
}
