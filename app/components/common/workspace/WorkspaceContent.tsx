import { SkillData } from "@/data/skills";
import { ExperiencesData } from "@/data/experiences";
import { Tab, TabGroup, TabList } from "@headlessui/react";
import SkillsTab from "./SkillsTab";
import ExperiencesTab from "./ExperiencesTab";

type WorkspaceContentProps = {
  contentData: SkillData | ExperiencesData,
  menuCategory: string
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function WorkspaceContent({ contentData, menuCategory }: WorkspaceContentProps) {
  return (
    <div className="flex flex-col relative w-full lg:flex-1 lg:min-h-0">
      <TabGroup className="flex flex-col w-full pt-10 lg:h-full lg:min-h-0">
        <TabList className="flex space-x-4 border-b border-tabs-tab-border shrink-0">
          <Tab
            className={({ selected }) =>
              classNames(
                "px-4 py-2 text-lg font-medium rounded-t-lg focus:outline-none cursor-pointer",
                selected
                  ? "border-b-1 border-tabs-tab-active-border"
                  : "border-b-1 border-transparent"
              )
            }
          >
            {menuCategory === "skills" ? "Related Projects" : "DETAILS"}
          </Tab>
        </TabList>

        {menuCategory === "skills" && <SkillsTab contentData={contentData as SkillData} />}
        {menuCategory === "experiences" && <ExperiencesTab contentData={contentData as ExperiencesData} />}
      </TabGroup>
    </div>
  );
}
