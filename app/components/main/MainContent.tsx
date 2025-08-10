import TabsPanel, { Tab } from "@/app/components/main/TabsPanel";

type MainContentType = {
  tabs: Tab[],
  defaultTabId?: string,
  className?: string
}
export default function MainContent({
  tabs,
  defaultTabId,
  className
}: MainContentType) {
  return (
    <div className={`flex flex-1 w-full h-auto bg-editor-bg text-editor-text ${className}`}>
      <TabsPanel tabs={tabs} defaultTabId={defaultTabId}/>
    </div>
  )
}