import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
  className?: string;
}

export default function Workspace({children, className}: Props) {
  return (
    <div>
      <Sidebar className="w-64 h-full"/>
      <MainContent className="flex-1 h-full">{children}</MainContent>
    </div>
  )
}