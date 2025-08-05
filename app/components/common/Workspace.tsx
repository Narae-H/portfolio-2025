import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

type Props = {
  className?: string;
}

export default function Workspace({className}: Props) {
  return (
    <div className={`flex flex-row ${className}`}>
      <Sidebar className="flex bg-sidebar-bg text-sidebar-text w-82 h-full border-r-1 border-sidebar-border"/>
      <MainContent className="flex-1 h-full"></MainContent>
    </div>
  )
}