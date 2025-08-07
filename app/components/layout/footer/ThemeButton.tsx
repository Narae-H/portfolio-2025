import { useTheme } from "@/lib/hooks/useTheme";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ThemeButton() {
  const { toggleTheme, isLight } = useTheme();

  return (
    <div
      className={`
        relative flex flex-wrap justify-between items-center
        w-[56px]
        px-[5px]
        my-[2px]
        mx-[5px]
        rounded-[25px]
        transition-colors duration-500 ease-in-out
        ${isLight
          ? 'bg-[#ffc563] shadow-[inset_-5px_2px_5px_0px_rgba(151,95,0,0.5)]'
          : 'bg-[#626262] shadow-[inset_-1px_1px_4px_0px_rgba(0,0,0,0.5)]'}
      `}
    >
      <div>
        <MdLightMode className="w-5 h-5" />
      </div>

      <div>
        <MdDarkMode className="w-5 h-5" />
      </div>

      <div
        className="
          absolute flex 
          top-0 left-0 
          w-full h-full 
          bg-transparent 
          cursor-pointer"
        onClick={ toggleTheme }
      >
        <div
          className={`
            absolute flex
            top-[2px]
            ${isLight ? 'right-[3px] left-auto animate-slide-right shadow-[-2px_2px_5px_0px_rgba(0,0,0,0.5)]' : 'left-[3px] right-auto animate-slide-left shadow-[3px_3px_6px_0px_rgba(0,0,0,0.5)]'}
            flex
            w-[17px]
            h-[17px]
            bg-[#f2f1ee]
            rounded-full
          `}
        />
      </div>
    </div>
  )
}
