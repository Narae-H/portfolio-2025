import ActivityBar from "./components/common/ActivityBar";
import Workspace from "./components/common/Workspace";

type Props = {
  children: React.ReactNode;
  className?: string;
}
export default function Page({children, className}: Props) {
  return (
    <>
      <ActivityBar className="flex w-18 h-auto"/>
      <Workspace className="flex flex-1 h-auto"/>
    </>
  );
}
