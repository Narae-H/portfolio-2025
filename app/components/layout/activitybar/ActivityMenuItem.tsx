import Link from "next/link"
import { VscCode, VscFiles, VscFolderLibrary } from "react-icons/vsc";

type ActivityMenuItemProps = {
  title: string,
  toottip?: string,
  icon?: string,
  className?: string
}

const iconMap = {
  VscFiles: <VscFiles />,
  VscCode: <VscCode />,
  VscFolderLibrary: <VscFolderLibrary />
};

// TODO: icon을 텍스트로 받아서 componet와 매칭 시켜야 함.
export default function ActivityMenuItem({
  title,
  toottip = '',
  icon = '',
  className = ''
}: ActivityMenuItemProps) {
  return (
    <div className={`flex text-base-text p-3 rounded-md hover:bg-base-hover-bg hover: cursor-pointer ${className}`}>
      <Link href="/home">
        {/* {icon && iconMap[icon]} */}
        {title}
      </Link>
    </div>
  )
}