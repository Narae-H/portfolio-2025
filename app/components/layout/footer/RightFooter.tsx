import ThemeButton from "@/app/components/common/ThemeButton";

export default function RightFooter() {
  return(
    <div className="flex h-full text-sm">
      <div className="flex h-full items-center text-footer-text">
        <span className="flex">UTF-8</span>
      </div>
      <div className="flex h-full">
        <ThemeButton />
      </div>  
    </div>
  )
}