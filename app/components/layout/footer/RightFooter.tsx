import ThemeButton from "@/app/components/layout/footer/ThemeButton";

export default function RightFooter() {

  return(
    <div className="flex h-full text-sm">
      <div className="flex h-full pr-3 items-center text-footer-text">
        <span className="flex">UTF-8</span>
      </div>
      <div className="flex h-full">
        <ThemeButton />
      </div>  
    </div>
  )
}