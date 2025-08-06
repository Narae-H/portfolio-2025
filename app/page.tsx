import MainContent from "./components/main/MainContent";
import Sidebar from "./components/main/Sidebar";

type Props = {
  children: React.ReactNode;
  className?: string;
}

export default function Page() {
  return (
    <div className="flex flex-1 h-auto">
      <Sidebar className="flex bg-sidebar-bg text-sidebar-text w-82 h-full border-r-1 border-sidebar-border"/>
      <MainContent className="flex-1 h-full" />
    </div>
  );
}
