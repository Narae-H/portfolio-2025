'use client'

import Icon from "@/app/components/common/Icon";
import { useTheme } from "@/lib/hooks/useTheme";
import Tippy from "@tippyjs/react";
import Link from "next/link";

type ActivityMenuItemProps = {
  title: string,
  tooltip?: string,
  icon?: string,
  className?: string,
  iconClassName?: string,
  isActiveMenu?: boolean
}

export default function ActivityMenuItem({
  title,
  tooltip = '',
  icon = '',
  className = '',
  iconClassName = '',
  isActiveMenu = false
}: ActivityMenuItemProps) {
  // const {theme, isLight} = useTheme();

  // const [borderColor, setBorderColor] = useState<string>("");

  // useEffect(() => {
  //   const root = document.documentElement;
  //   const color = getComputedStyle(root)
  //     .getPropertyValue("--color-sidebar-border")
  //     .trim();
  //   setBorderColor(color);
  // }, [theme]);

  // const [bgColor, setBgColor] = useState<string>("");

  // useEffect(() => {
  //   const root = document.documentElement;
  //   const color = getComputedStyle(root)
  //     .getPropertyValue("--color-sidebar-bg")
  //     .trim();
  //   setBgColor(color);
  // }, [theme]);

  // const [tooltipStyles, setTooltipStyles] = useState({
  //   border: isLight? "#d6cfe2":"#37373d",
  //   backgroundColor: isLight? "#d6cfe2":"#37373d",
  //   color: "",
  // });

  // useEffect(() => {
  //   const rootStyles = getComputedStyle(document.documentElement);
  //   setTooltipStyles({
  //     border: `1px solid ${rootStyles.getPropertyValue("--color-sidebar-border").trim()}`,
  //     backgroundColor: rootStyles.getPropertyValue("--color-sidebar-bg").trim(),
  //     color: rootStyles.getPropertyValue("--color-sidebar-text").trim(),
  //   });
  // }, [theme]);

  const {theme} = useTheme();

  return (
    <Tippy content={tooltip} placement="right">
      <Link href="/home" 
            className={`
              flex w-full justify-center 
              py-1 
              border-l-3 
              ${isActiveMenu? 'border-sidebar-border-active': 'border-sidebar-border-inactive'}
              `}
            data-tooltip-id='tooltip-right'
            data-tooltip-content={tooltip}
      >
        <div className={`
          flex 
          text-base-text 
          p-3 rounded-md 
          hover:cursor-pointer horder: hover:text-sidebar-hover-text
          ${className}
        `}>
          <Icon name={icon} className={`${iconClassName}`}/>
        </div>
      </Link>
    </Tippy>
  )
}