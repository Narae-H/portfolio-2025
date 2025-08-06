import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

// type theme = {
//   'dark-theme' | 'tokyonight-theme'
// }

export default function ThemeButton() {
  const [theme, setTheme] = useState('dark-theme');
  // prevTheme === 'tokyonight-theme' ? 'dark-theme' : 'tokyonight-theme'

  const isLight = true;

  return (
    <div
      className={`
        relative flex flex-wrap justify-between items-center
        w-[3.5em]
        px-[5px]
        my-[2px]
        mx-[5px]
        rounded-[12px]
        transition-colors duration-500 ease-in-out
        ${isLight
          ? 'bg-[#ffc563] shadow-[inset_-5px_2px_5px_0px_rgba(151,95,0,0.5)]'
          : 'bg-[#626262] shadow-[inset_-1px_1px_4px_0px_rgba(0,0,0,0.5)]'}
      `}
    >
      <div className={`flex ${isLight ? '' : 'animate-rotate-bounce'}`}>
        <div className="na-mode-button light">
          <MdLightMode />
        </div>
      </div>

      <div className={`flex ${!isLight ? 'animate-rotate-bounce' : ''}`}>
        <div className="na-mode-button dark">
          <MdDarkMode />
        </div>
      </div>

      <div
        className="absolute flex top-0 left-0 w-full h-full bg-transparent text-footer-text cursor-pointer"
        onClick={handleThemeToggle}
      >
        <div
          className={`
            absolute flex
            top-[var(--na-mode-button-wrapper-margin-top-bottom)]
            ${isLight ? 'right-[calc(var(--na-mode-button-wrapper-margin-left-right)-2px)] left-auto animate-slide-right shadow-[-2px_2px_5px_0px_rgba(0,0,0,0.5)]' : 'left-[calc(var(--na-mode-button-wrapper-margin-left-right)-2px)] right-auto animate-slide-left shadow-[3px_3px_6px_0px_rgba(0,0,0,0.5)]'}
            flex
            w-[var(--na-mode-button-selected-width)]
            h-[var(--na-mode-button-selected-width)]
            bg-[#f2f1ee]
            rounded-full
          `}
        />
      </div>
    </div>
  )
}

function handleThemeToggle() {
  console.log("handleThemeToggle");
}