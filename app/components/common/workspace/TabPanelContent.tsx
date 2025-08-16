import { TabPanel } from "@headlessui/react";

type TabPanelContentProps = {
  title: string;
  children: React.ReactNode;
};

export default function TabPanelContent({ children }: TabPanelContentProps) {
  return (
    <TabPanel className="p-2">
      <div className="flex flex-col pb-10">
        {children}
      </div>
    </TabPanel>
  );
}
